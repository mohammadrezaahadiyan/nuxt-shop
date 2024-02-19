import type {RegisterCommandDTo} from "~/models/auth/registerDTo";
import {FetchApi} from "~/utilities/CustomFetchApi";
import type {ApiResponse} from "~/models/ApiResponse";
import type {LoginCommandDTo} from "~/models/auth/loginDTo";
import type {LoginResultsDTo} from "~/models/auth/loginResultsDTo";

export function RegisterUser(command: RegisterCommandDTo)
    : Promise<ApiResponse<null>> {
    return FetchApi('/Auth/register', {
        method: 'POST',
        body: command
    })
}

export function LoginUser(command: LoginCommandDTo)
    : Promise<ApiResponse<LoginResultsDTo>> {
    return FetchApi('/Auth/login', {
        method: 'POST',
        body: command
    })
}