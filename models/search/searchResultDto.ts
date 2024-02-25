import type {FilterParams} from "~/models/base/filterParams";
import type {FilterResult} from "~/models/base/filterResults";
import type {ProductCardDto} from "~/models/productCard";


export interface ProductFilterResultDto extends FilterResult<ProductCardDto>{

}

export interface ProductFilterParamsDto extends FilterParams {
    categorySlug: string;
    search: string;
    onlyAvailableProducts: boolean;
    justHasDiscount: boolean;
    searchOrderBy: ProductSearchResultOrderBy | null;
}

export enum ProductSearchResultOrderBy {
    Latest,
    Expensive,
    Cheapest
}