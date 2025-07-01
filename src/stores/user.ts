import type {IUser} from "@/interfaces/i-user.interface.ts";
import axios from "axios";
import Alert from "@/components/Alert.ts";
import type {IRole} from "@/interfaces/i-role.interface.ts";

export interface iModel  {
  userName : string;
  password:string;
  avatar: string;
  fullName: string;
  role: string;
  isActive: boolean;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    headers: ref(
      [
        {
          title: "id",
          key: "uid",
          align: "start",
        },
        {
          title: "user name",
          key: "userName",
          align: "start",
        },
        {
          title: "display name",
          key: "fullName",
          align: "start",
        },
        {
          title: "avatar",
          key: "avatar",
          align: "start",
        },
        {
          title: "role",
          key: "role.name",
          align: "end",
        },
        {
          title: "status",
          key: "isActive",
          align: "end",
        },
        {
          title: "create",
          key: "createdAt",
          align: "start",
        },
        {
          title: "action",
          key: "action",
          align: "start",
        },


        ]),
    userList: ref<IUser[]>([]),
    isLoading: ref<boolean>(false),
    roleList: ref<IRole[]>([]),
    selectUser: ref<IUser>(),
  }),

  actions: {

    getUrl() {
      return import.meta.env.VITE_API_URL + ":" + import.meta.env.VITE_PORT;
    },

    async getUser() {
      try {
        const response = await axios.get(
          this.getUrl() + `/user`
        );
        if (!response.data) return;
        this.isLoading = false;

        this.userList = response.data;

      } catch (err) {

        console.log('model2', err);
        Alert.error(err as string);
        this.isLoading = true;
      }
    },

    async getRole() {
      try {
        const response = await axios.get(
          this.getUrl() + `/role`
        );
        if (!response.data) return;
        this.isLoading = false;

        this.roleList = response.data;

      } catch (err) {

        console.log('model2', err);
        Alert.error(err as string);
        this.isLoading = true;
      }
    },

    async getOne(id: string) {
      try {
        const response = await axios.get(
          this.getUrl() + `/user/${id}`
        );
        if (!response.data) return;
        this.isLoading = false;
        this.selectUser = response.data;
      } catch (err) {
        console.log('model2', err);
        Alert.error(err as string);
        this.isLoading = true;
      }
    },

    async createUser(model: any, router: any) {
      this.isLoading = true;
      try {
        const response = await axios.post(
          this.getUrl() + `/user`,
          {
            "userName": model.userName,
            "password": model.password,
            "avatar": model.avatar,
            "fullName": model.fullName,
            "role": model.role,
          }
        );
        if (!response.data) return;
        this.isLoading = false;
       // this.roleList = response.data;
        router.push('/user')
      } catch (err) {
        Alert.error(err as string);
        this.isLoading = true;
      }
    },

    async delete(id: any) {
      try {
        const response = await axios.delete(
          this.getUrl() + `/user/${id}`
        );
        if (!response.data) return;
        this.isLoading = false;
        Alert.success('delete done !')
        this.userList = this.userList.filter(user => user._id !== id);
      } catch (err) {
        Alert.error(err as string);
        this.isLoading = true;
      }
    },



    async update(id: string, userModel: iModel, router: any) {
      try {
        const response = await axios.patch<iModel>(
          this.getUrl() + `/user/${id}`,
          userModel
        );
        if (!response.data) return;
        this.isLoading = false;
        Alert.success('update done !')
        router.push('/user')

      } catch (err) {
        Alert.error(err as string);
        this.isLoading = true;
      }
    },

  }
})
