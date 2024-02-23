import type {SEOData} from "~/models/SeoData";

export interface CategoryDto{
    id: number;
    creationDate: Date;
    title: string;
    slug: string;
    imageName: string;
    seoData: SEOData;
    childs: ChildCategoryDto[] | null;
}

export interface ChildCategoryDto {
    id: number;
    creationDate: Date;
    title: string;
    slug: string;
    seoData: SEOData;
    parentId: number;
    imageName: string;
    childs: SecondaryChildCategoryDto[] | null;
}

export interface SecondaryChildCategoryDto {
    id:number;
    creationDate: Date;
    title: string;
    slug: string;
    parentId: number;
    imageName: string;
}

