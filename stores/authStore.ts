import {defineStore} from "pinia";
import type {LoginResultsDTo} from "~/models/auth/loginResultsDTo";
import type {UserDTo} from "~/models/users/userDTo";
import {getCurrentUser} from "~/services/user.service";
import {AppStatusCode} from "~/models/ApiResponse";

export const useAuthStore = defineStore('auth', () => {
    const loginResult: Ref<LoginResultsDTo | null> = ref(null)
    const currentUser: Ref<UserDTo | null> = ref(null)
    const loading = ref(false)
    const isLogin = computed(() => loginResult.value != null)

    const setCurrentUser = async () => {
        const localStorageData = localStorage.getItem("auth-data")
        if (!localStorageData) {
            return;
        }
        const loginData = JSON.parse(localStorageData)
        loginResult.value = loginData

        loading.value = true
        let result = await getCurrentUser()
        if(result.isSuccess){
            currentUser.value = result.data
        }else if(result.metaData.appStatusCode === AppStatusCode.UnAuthorize){
            loginResult.value = null
            localStorage.removeItem("auth-data")
        }
        loading.value = false
    }

    return {loading, loginResult, currentUser, isLogin, setCurrentUser}
})