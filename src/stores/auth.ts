
import type {ILogin} from "@/interfaces/i-login.interfcae.ts";
import axios from "axios";
import Alert from "../components/Alert.ts"

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: ref<string>(''),
    refreshToken: ref<string>(''),
    isLoading: ref<boolean>(false),
  }),
  actions: {
    getUrl() {
      return import.meta.env.VITE_API_URL + ":" + import.meta.env.VITE_PORT;
    },

    async login(model: ILogin, router: any) {
      try {
        const response = await axios.post(
          this.getUrl() + `/auth/login`,
          {
            user: model.user,
            password: model.password,
          }
        );
        console.log('response', response)
        if (!response.data) return;
        this.isLoading = false;
        this.accessToken = response.data.accessToken;
        this.refreshToken = response.data.refreshToken;
        localStorage.setItem('authToken', this.accessToken);
        router.push('/')
      } catch (err) {

        console.log('model2', err);
         Alert.error(err as string);
        this.isLoading = true;
      }
    },



  }
})
