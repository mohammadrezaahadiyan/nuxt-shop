import {$fetch, FetchError} from "ofetch";
import {type ApiResponse, AppStatusCode} from "~/models/ApiResponse";
import type {FetchOptions} from "ofetch";
import {useAuthStore} from "~/stores/authStore";
import {BASE_URL} from "~/utilities/ApiConfig";

export async function FetchApi<T>(
    url: string,
    config: FetchOptions = {}
): Promise<ApiResponse<T>> {

    config = {...config, baseURL: BASE_URL}
    const authStore = useAuthStore()
    if(!config.headers){
        config.headers = {}
    }
    if (authStore && authStore.isLogin) {
        let loginData = authStore.loginResult
        // @ts-ignore
        config.headers["Authorization"] = `Bearer ${loginData.token}`
    }
    // @ts-ignore
    return $fetch<ApiResponse<T>>(url, config)
        .then(res => {
            return res;
        })
        .catch((e: FetchError) => {
            return {
                data: null,
                isSuccess: false,
                metaData: {
                    appStatusCode:
                        e.response?._data?.MetaData?.appStatusCode ?? AppStatusCode.ServerError,
                    message:
                        e.response?._data?.MetaData?.Message ?? 'مشکلی در انجام عملیات رخ داده'
                }
            }
        })
}