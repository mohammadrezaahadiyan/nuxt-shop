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
          :slides-per-view="5"
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
          v-if="props.categories"
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

</style>