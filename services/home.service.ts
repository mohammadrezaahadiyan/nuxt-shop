import type {ApiResponse} from "~/models/ApiResponse";
import type {HomeDataDto} from "~/models/home/homeDataDto";
import {FetchApi} from "~/utilities/CustomFetchApi";

export function getHomeData()
    : Promise<ApiResponse<HomeDataDto>> {
    return FetchApi('Utilities/MainPageData')
}