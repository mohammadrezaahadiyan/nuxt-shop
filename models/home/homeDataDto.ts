import type {ProductCardDto} from "~/models/productCard";

export interface BannerDto {
    creationDate: Date;
    link: string;
    imageName: string;
    position: BannerPosition
}

export enum BannerPosition{
    زیر_اسلایدر,
    سمت_چپ_اسلایدر,
    بالای_اسلایدر,
    سمت_راست_شگفت_انگیز,
    وسط_صفحه,
}

export interface SliderDto{
    id:number
    creationDate: Date;
    title: string;
    link: string;
    imageName: string;
}

export interface HomeDataDto {
    banners: BannerDto[];
    sliders: SliderDto[];
    latestProduct: ProductCardDto[]
    amazingProducts: ProductCardDto[]
}