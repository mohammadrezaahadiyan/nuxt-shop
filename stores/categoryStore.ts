import {defineStore} from "pinia";
import type {CategoryDto, ChildCategoryDto} from "~/models/categories/categoryDto";
import {getCategories} from "~/services/categories.service";

export const useCategoryStore = defineStore('category',
    () => {

        const categoryData: Ref<CategoryDto[] | null > = ref(null)
        // const subCategoryData: Ref<ChildCategoryDto[] | null> = ref(null)

       const setData = async () => {
            const result = await getCategories()
            if (result) {
                categoryData.value = result.data
            }
        }
        return {setData, categoryData}
    })