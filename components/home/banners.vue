<script setup lang="ts">

import {type BannerDto, BannerPosition} from "~/models/home/homeDataDto";
import {getBannerImage} from "~/utilities/imageUrls";

const props = defineProps<{
  banners: BannerDto[],
  position: BannerPosition
}>()

const filteredBanners = props.banners.filter(f => f.position === props.position)
</script>

<template>

  <div class="row mb-3 d-sm-block d-none" v-if="props.position == BannerPosition.topSide" v-for="banner in filteredBanners" :key="banner.id">
    <div class="col-12">
      <div class="banner-img">
        <a :href="banner.link"><img :src="`${getBannerImage(banner.imageName)}`" alt="banner"></a>
      </div>
    </div>
  </div>

  <div class="col-lg-4" v-if="props.position == BannerPosition.leftSide">
    <div class="row">
      <div class="col-lg-12 col-6 mb-lg-3" v-for="banner in filteredBanners.slice(0,2)" :key="banner.id">

        <!-- start of banner -->
        <div class="banner-img banner-side-main-slider bg-position-right">
          <a :href="banner.link"
             :style="{height: '220px', 'background-image': `url(${getBannerImage(banner.imageName)})`}"
          >
            <img :src="`${getBannerImage(banner.imageName)}`" alt="">
          </a>
        </div>
        <!-- end of banner -->

      </div>
    </div>
  </div>

  <div class="row mb-5" v-if="props.position == BannerPosition.bottomSide">
    <div class="col-md-6 mb-lg-0 mb-3" v-for="banner in filteredBanners.slice(0,2)" :key="banner.id">

      <div class="banner-img">
        <a :href="banner.link">
          <img :src="`${getBannerImage(banner.imageName)}`" alt="">
        </a>
      </div>
    </div>
  </div>

  <div class="row mb-5" v-if="props.position == BannerPosition.middleSide">
    <div class="col-md-3 col-6 mb-lg-0 mb-3" v-for="banner in filteredBanners.slice(0,4)" :key="banner.id">

      <div class="banner-img">
        <a :href="banner.link">
          <img :src="`${getBannerImage(banner.imageName)}`" alt="">
        </a>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>