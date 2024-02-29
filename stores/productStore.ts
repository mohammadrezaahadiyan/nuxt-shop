import {defineStore} from "pinia";
import {
    type ProductFilterParamsDto,
    type ProductFilterResultDto,
    ProductSearchResultOrderBy
} from "~/models/search/searchResultDto";
import type {ApiResponse} from "~/models/ApiResponse";
import {getProductByFilter} from "~/services/product.service";
import type {ProductCardDto} from "~/models/productCard";


export const useProductStore = defineStore('product', () => {

    const loading = ref(false)
    const route = useRoute()
    const routeParams = route.path.split('/')
    const response: Ref<ProductFilterResultDto | null> = ref(null)
    const filteredProducts: Ref<ProductCardDto[] | null> = ref([])


    const getFilterParams = (): ProductFilterParamsDto => {
        const params = route.path.split('/')

        return  {
            categorySlug: params[2]?.replace("category-", ""),
            justHasDiscount: getBoolean(route.query.justHasDiscount?.toString()),
            onlyAvailableProducts: getBoolean(route.query.onlyAvailableProducts?.toString()),
            pageId: Number(route.query.pageId?.toString() ?? "1"),
            search: route.query.search?.toString(),
            take: 8,
            searchOrderBy:
            //@ts-ignore
                (route.query.searchOrderBy as ProductSearchResultOrderBy) ?? null
        } as ProductFilterParamsDto
    }

    // @ts-ignore
    const getProducts = async ():Promise<ApiResponse<ProductFilterResultDto>> => {
        let params = getFilterParams()
        loading.value = true
        let result = await getProductByFilter(params)
        if (result){
            response.value = result.data
            if (response.value){
                filteredProducts.value = response.value.data
            }
        }
        loading.value = false
    }

    return {getProducts, filteredProducts}
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