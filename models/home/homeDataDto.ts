import type {ProductCardDto} from "~/models/productCard";

export interface BannerDto {
    id:number
    creationDate: Date;
    link: string;
    imageName: string;
    position: BannerPosition
}

export enum BannerPosition{
    bottomSide,
    leftSide,
    topSide,
    specialSide,
    middleSide,
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