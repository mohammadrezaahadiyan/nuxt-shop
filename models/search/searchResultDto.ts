import type {FilterParams} from "~/models/base/filterParams";
import type {FilterResult} from "~/models/base/filterResults";
import type {ProductCardDto} from "~/models/productCard";
import type {CategoryDto} from "~/models/categories/categoryDto";

export interface ProductFilterResultDto extends FilterResult<ProductCardDto>{
    categoryDto:CategoryDto
}

export interface ProductFilterParamsDto extends FilterParams {
    categorySlug: string | undefined;
    search: string | undefined;
    onlyAvailableProducts: boolean;
    justHasDiscount: boolean;
    startPrice: number;
    endPrice: number;
    searchOrderBy: ProductSearchResultOrderBy | null;
}

export enum ProductSearchResultOrderBy {
    Latest,
    Expensive,
    Cheapest
}