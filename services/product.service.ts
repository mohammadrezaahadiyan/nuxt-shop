import type {FilterParams} from "~/models/base/filterParams";
import type {ApiResponse} from "~/models/ApiResponse";
import type {ProductFilterResultDto} from "~/models/search/searchResultDto";
import {FetchApi} from "~/utilities/CustomFetchApi";

export const getProductByFilter = (filterParams: FilterParams)
    :Promise<ApiResponse<ProductFilterResultDto>> => {
        return FetchApi('/product/shop', {
            body: filterParams,
            method: 'GET'
        })
}