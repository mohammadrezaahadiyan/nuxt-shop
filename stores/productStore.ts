import {defineStore} from "pinia";
import {
    type ProductFilterParamsDto,
    type ProductFilterResultDto,
    ProductSearchResultOrderBy
} from "~/models/search/searchResultDto";
import type {ApiResponse} from "~/models/ApiResponse";
import {getProductByFilter} from "~/services/product.service";


export const useProductStore = defineStore('product', () => {

    const filteredProducts: Ref<ProductFilterResultDto[] | null> = ref([])
    const route = useRoute()
    const routeParams = route.path.split('/')

    const getFilterParams = (): ProductFilterParamsDto => {
        const params = route.path.split('/')

        return  {
            categorySlug: params[2]?.replace("category-", ""),
            justHasDiscount: getBoolean(route.query.justHasDiscount?.toString()),
            onlyAvailableProducts: getBoolean(route.query.onlyAvailableProducts?.toString()),
            pageId: Number(route.query.pageId?.toString() ?? "1"),
            search: route.query.q?.toString(),
            take: 8,
            searchOrderBy:
            //@ts-ignore
                (route.query.searchOrderBy as ProductSearchResultOrderBy) ?? null
        } as ProductFilterParamsDto
    }

    // @ts-ignore
    const getProducts = async ():Promise<ApiResponse<ProductFilterResultDto>> => {
        let params = getFilterParams()

        let result = await getProductByFilter(params)
        if (result){
            filteredProducts.value = result.data
        }
    }

    return {getFilterParams, getProducts, filteredProducts}
})

function getBoolean(value: any): boolean {
    switch (value) {
        case true:
        case "true":
        case "1":
        case 1:
            return true;
        default:
            return false;
    }
}