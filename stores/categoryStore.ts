import {defineStore} from "pinia";
import type {CategoryDto, ChildCategoryDto} from "~/models/categories/categoryDto";
import {getCategories} from "~/services/categories.service";

export const useCategoryStore = defineStore('category',
    () => {

        const categoryData: Ref<CategoryDto[] | null > = ref(null)
        const loading = ref(false)

       const setData = async () => {
            loading.value = true
            const result = await getCategories()
            if (result) {
                categoryData.value = result.data
            }
            loading.value = false
        }
        return {setData, categoryData}
    })