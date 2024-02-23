import {FetchApi} from "~/utilities/CustomFetchApi";
import type {ApiResponse} from "~/models/ApiResponse";
import type {CategoryDto} from "~/models/categories/categoryDto";

export function getCategories()
    :Promise<ApiResponse<CategoryDto[]>> {
    return FetchApi('Category')
}