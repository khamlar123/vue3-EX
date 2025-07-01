import type {IRole} from "@/interfaces/i-role.interface.ts";
import axios from "axios";
import Alert from "@/components/Alert.ts";
import type {IHeader} from "@/interfaces/i-headers.interface.ts";

export interface ICreateRole {
  name: string,
  isActive: boolean,
  permission: string[],
}

export const useRoleStore = defineStore('role', {
  state: () => ({
    selectRole: ref<IRole>(),
    roleList:ref<IRole[]>([]),
    isLoading: ref<boolean>(false),
    headers: ref<IHeader[]>(  [
      { title: 'id', key: 'uid', align: 'start' },
      { title: 'name', key: 'name', align: 'start' },
      { title: 'status', key: 'isActive',  align: 'end' },
      { title: 'action', key: 'action',  align: 'end', }
    ])
  }),
  actions: {
    getUrl() {
      return import.meta.env.VITE_API_URL + ":" + import.meta.env.VITE_PORT;
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
        Alert.error(err as string);
        this.isLoading = true;
      }
    },

    async create(model: ICreateRole, router: unknown) {
      try {
        const response = await axios.post(
          this.getUrl() + `/role`,
          model
        );
        if (!response.data) return;
        this.isLoading = false;
       // this.roleList = response.data;
        this.roleList.unshift(response.data);
        Alert.success('create role success')
        router.push('/roles');
      } catch (err) {
        Alert.error(err as string);
        this.isLoading = true;
      }
    },

    async delete(id: string) {
      try {
        const response = await axios.delete(
          this.getUrl() + `/role/${id}`,
        );
        if (!response.data) return;
        this.isLoading = false;
        // this.roleList = response.data;
       // this.roleList.unshift(response.data);
        this.roleList = this.roleList.filter(f => f._id !== id);
        Alert.success('delete success');
      } catch (err) {
        Alert.error(err as string);
        this.isLoading = true;
      }
    }

  }
})
