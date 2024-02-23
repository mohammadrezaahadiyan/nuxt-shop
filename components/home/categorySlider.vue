<script setup lang="ts">

import type {CategoryDto} from "~/models/categories/categoryDto";
import {getCategoryImage} from "~/utilities/imageUrls";

const props = defineProps<{
  categories:CategoryDto[]
}>()

</script>

<template>

  <div class="category-container pb-5">
    <!-- Additional required wrapper -->
      <!-- Slides -->
      <Swiper
          v-if="props.categories"
          slides-per-view='auto'
          :modules="[SwiperNavigation, SwiperPagination]"
          :navigation="true"
          :pagination="{
                clickable: true,
                mode: 'vertical',
              }"
          :on-set-transition="{
                type: 'slide',
                transition: 'slide'
              }"
          :center-insufficient-slides="true"
          :space-between="20"
          :breakpoints="{
            320:{slidesPerView: 1},
            576:{slidesPerView: 2},
            768:{slidesPerView: 3},
            992:{slidesPerView: 4},
          }"
      >

          <SwiperSlide v-for="item in props.categories">
            <div class="category-item">
              <a href="#">
                <img :src="`${getCategoryImage(item.imageName)}`" class="category-img"
                     :alt="item.title">
                <span class="category-title">{{ item.title }}</span>
              </a>
            </div>
          </SwiperSlide>

      </Swiper>

  </div>

</template>

<style>

.category-container .swiper-pagination-bullet {
  background-color: #000000 !important;
  opacity: 1 !important;
}

.category-container .swiper-pagination-bullet-active {
  background-color: #ffffff !important;
  opacity: 1 !important;
}

.category-container .swiper {
  overflow-y: visible !important;
}

.category-container .swiper-pagination-horizontal{
  bottom: -40px !important;
}

@media only screen and (max-width: 767px) {
  .category-container .swiper-pagination-horizontal{
    bottom: 0 !important;
  }
}

</style>