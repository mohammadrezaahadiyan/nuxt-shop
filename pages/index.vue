<script setup lang="ts">
import {useHomeStore} from "~/stores/homeStore";
import {BannerPosition} from "~/models/home/homeDataDto";
import AmazingSlider from "~/components/home/amazingSlider.vue";
import CategorySlider from "~/components/home/categorySlider.vue";

const homeStore = useHomeStore()
const categoryStore = useCategoryStore()

onMounted(async () => {
  await homeStore.setHomeData()
  await categoryStore.setData()
})

</script>

<template>
  <nuxt-link class="btn btn-primary" to="test">go to test page</nuxt-link>
  <div>

    <HomeBanners v-if="homeStore.banners" :banners="homeStore.banners" :position="BannerPosition.topSide"/>

    <div class="row mb-5">
      <HomeMainSlider :data="homeStore.sliders"/>
      <HomeBanners v-if="homeStore.banners" :banners="homeStore.banners" :position="BannerPosition.leftSide"/>
    </div>

    <HomeBanners v-if="homeStore.banners" :banners="homeStore.banners" :position="BannerPosition.bottomSide"/>

    <!-- start of box => specials-product-slider -->
    <div class="ui-box ui-box-specials pb-3 mb-5" style="background-color: #f03426;">
      <div class="container">
        <div class="ui-box-title text-white fw-bolder d-sm-none">قبل از اتمام جشنواره خرید کن!</div>
        <div class="ui-box-content">
          <div class="row">
            <div class="col-lg-3 d-lg-block d-none">
              <div class="specials-container">
                <img src="/images/theme/specials.png" class="img-fluid" alt="">
                <a href="#" class="btn btn-sm btn-outline-light">مشاهده همه <i
                    class="ri-arrow-left-fill ms-2"></i></a>
              </div>
            </div>
            <AmazingSlider :products="homeStore.amazingProducts"/>
          </div>
        </div>
      </div>
    </div>
    <!-- end of box => specials-product-slider -->

    <!-- start of box => categories-slider -->
    <div class="ui-box mb-5">
      <div class="ui-box-title">دسته بندی محصولات</div>
      <div class="ui-box-content">
        <div class="categories-container">

          <HomeCategorySlider :categories="categoryStore.categoryData"/>

        </div>
      </div>
    </div>
    <!-- end of box => categories-slider -->

    <HomeBanners v-if="homeStore.banners" :banners="homeStore.banners" :position="BannerPosition.middleSide"/>

  </div>

</template>

<style scoped>

</style>