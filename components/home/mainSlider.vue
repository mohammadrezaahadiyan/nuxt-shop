<script setup lang="ts">
import {Carousel, Slide, Navigation, Pagination} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css"
import type {SliderDto} from "~/models/home/homeDataDto";
import {getSliderImage} from "~/utilities/imageUrls";

const currentSlide = ref(0)
const props = defineProps<{data: SliderDto[]}>()
</script>

<template>
  <Carousel dir="rtl" v-model="currentSlide">

    <Slide v-for="item in props.data" :key="item.id" class="swiper-slide main-swiper-slide">
      <a class="carousel__item" :href="item.link">
        <img :src="getSliderImage(item.imageName)" alt="">
      </a>
    </Slide>

    <template #addons="{slidesCount}">

      <div class="slider__navigation">
        <div class="swiper-button-prev" v-if="slidesCount > currentSlide + 1" @click="currentSlide++"></div>
        <div class="swiper-button-next" v-if="currentSlide > 0" @click="currentSlide--"></div>
      </div>

      <div class="slider__pagination">
        <label
            :class="{'active': item == (currentSlide + 1)}"
            v-for="item in slidesCount" :key="item"
            @click="item = (currentSlide - 1)"
        >
        </label>
      </div>
    </template>

  </Carousel>
</template>

<style scoped>
.carousel__item {
  border-radius: 15px;
  width: 100%;
}

.carousel__item img {
  height: 455px;
  width: 100%;
  border-radius: 15px;
}

.swiper-button-prev::after, .swiper-button-next::after {
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
}

.swiper-button-prev, .swiper-button-next {
  width: 55px;
  height: 55px;
  background: transparent;
}

.slider__pagination {
  display: flex;
  gap: .3rem;
  position: absolute;
  bottom: 2rem !important;
  width: 100%;
  right: 0;
  justify-content: center;
}

.slider__pagination label {
  width: 8px;
  height: 8px;
  background: rgba(0, 0, 0, 0.712);
  border-radius: 50%;
}

.slider__pagination label.active {
  background: #fff3f4 !important;
  width: 8px !important;
  height: 8px !important;
}
</style>