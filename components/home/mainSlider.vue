<script setup lang="ts">
import "vue3-carousel/dist/carousel.css"
import type {SliderDto} from "~/models/home/homeDataDto";
import {getSliderImage} from "~/utilities/imageUrls";

const props = defineProps<{ data: SliderDto[] }>()
</script>

<template>
  <div class="col-lg-8 mb-lg-0 mb-4">
    <Swiper
        :modules="[SwiperNavigation, SwiperEffectFade, SwiperAutoplay]"
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="true"
        :autoplay="{
          delay: 4000,
          pauseOnMouseEnter: true
        }"
    >

      <SwiperSlide v-for="item in props.data" :key="item.id" class="swiper-slide main-swiper-slide">
        <a class="carousel__item" :href="item.link">
          <img :src="getSliderImage(item.imageName)" alt="">
        </a>
      </SwiperSlide>

    </Swiper>
  </div>
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

.swiper-button-prev, .swiper-button-next {
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