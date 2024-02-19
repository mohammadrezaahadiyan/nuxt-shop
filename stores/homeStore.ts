import {defineStore} from "pinia";
import {getHomeData} from "~/services/home.service";
import type {BannerDto, HomeDataDto, SliderDto} from "~/models/home/homeDataDto";
import type {ProductCardDto} from "~/models/productCard";

export const useHomeStore = defineStore('home',
    () => {

        const loading = ref(false)
        const homePageData: Ref<HomeDataDto | null> = ref(null)
        const amazingProducts: Ref<ProductCardDto[] | null> = ref(null)
        const banners: Ref<BannerDto[] | null> = ref(null)
        const latestProducts: Ref<ProductCardDto[] | null> = ref(null)
        const sliders: Ref<SliderDto[] | null> = ref(null)

        const setHomeData = async () => {

            loading.value = true
            let result = await getHomeData()
            if (result.isSuccess) {
                homePageData.value = result.data

                if (homePageData.value) {
                    amazingProducts.value = homePageData.value.amazingProducts
                    banners.value = homePageData.value.banners
                    latestProducts.value = homePageData.value.latestProduct
                    sliders.value = homePageData.value.sliders
                }

            }
            loading.value = false
        }

        return {homePageData, loading, amazingProducts, banners, latestProducts, sliders, setHomeData}
    })