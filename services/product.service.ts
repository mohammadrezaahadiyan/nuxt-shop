import type {ApiResponse} from "~/models/ApiResponse";
import type {ProductFilterParamsDto, ProductFilterResultDto} from "~/models/search/searchResultDto";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {removeEmptyProps} from "~/utilities/objectutils";

export const getProductByFilter = (filterParams: ProductFilterParamsDto)
    :Promise<ApiResponse<ProductFilterResultDto[]>> => {
        removeEmptyProps(filterParams)
        return FetchApi('/product/shop', {
            params: filterParams,
            method: 'GET'
        })
}