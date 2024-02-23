<script setup lang="ts">
import type {ProductCardDto} from "~/models/productCard";
import {getProductImage} from "~/utilities/imageUrls";

const currentSlide = ref(0)
const props = defineProps<{
  products: ProductCardDto[]
}>()

</script>

<template>

  <div class="col-lg-9">
    <!-- Slider main container -->
    <div class="mb-3 pb-5">
      <!-- Additional required wrapper -->
      <div>
        <!-- Slides -->
        <div class="d-lg-none d-sm-block d-none">
          <div class="specials-container">
            <img src="/images/theme/specials.png"
                 class="img-fluid mb-0" alt="">
            <a href="#" class="btn btn-sm btn-outline-light">مشاهده همه <i
                class="ri-arrow-left-fill ms-2"></i></a>
          </div>
        </div>

        <div class="amazing-container">
          <Swiper
              :slides-per-view="4"
              :modules="[SwiperNavigation, SwiperPagination]"
              :navigation="true"
              :pagination="{
                clickable: true
              }"
              :on-set-transition="{
                type: 'slide',
                transition: 'slide'
              }"
          >
            <SwiperSlide v-for="item in props.products" class="product-card m-2">
              <div class="product-thumbnail">
                <a href="/asd">
                  <img :src="`${getProductImage(item.imageName)}`"
                       :alt="item.title">
                </a>
              </div>
              <div class="product-card-body">
                <h2 class="product-title">
                  <a href="#">{{ item.title }}</a>
                </h2>
                <div class="product-variant">
                <span class="color"
                      style="background-color: #d4d4d4;"></span>
                  <span class="color"
                        style="background-color: #e86841;"></span>
                  <span class="color"
                        style="background-color: #b82c32;"></span>
                  <span>+</span>
                </div>
                <div class="product-price fa-num">
                  <div class="d-flex align-items-center">
                    <del class="price-old">{{ item.price }}</del>
                    <span class="discount ms-2">{{ item.discountPercentage }}</span>
                  </div>
                  <span class="price-now">{{ item.totalPrice }}<span
                      class="currency">تومان</span></span>
                </div>
              </div>
              <div class="product-card-footer">
                <div
                    class="d-flex align-items-center justify-content-between border-top mt-2 py-2">
                  <div class="product-actions">
                    <ul>
                      <li><a href="#" data-bs-toggle="tooltip"
                             data-bs-placement="top" title=""
                             data-bs-original-title="افزودن به سبد خرید"
                             aria-label="افزودن به سبد خرید"><i
                          class="ri-shopping-cart-line"></i></a>
                      </li>
                      <li><a href="#" data-bs-toggle="tooltip"
                             data-bs-placement="top" title=""
                             data-bs-original-title="مشاهده سریع"
                             aria-label="مشاهده سریع"
                             data-remodal-target="quick-view-modal"><i
                          class="ri-search-line"></i></a>
                      </li>
                      <li><a href="#" data-bs-toggle="tooltip"
                             data-bs-placement="top" title=""
                             data-bs-original-title="افزودن به علاقمندی"
                             aria-label="افزودن به علاقمندی"><i
                          class="ri-heart-3-line"></i></a>
                      </li>
                    </ul>
                  </div>
                  <div class="product-rating fa-num">
                    <i class="ri-star-fill star"></i>
                    <strong>{{ item.rate }}</strong>
                    <span>{{ item.commentCount }}</span>
                  </div>
                </div>
                <div class="countdown-timer fa-num" data-countdown="2023/01/01">
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>


      </div>
    </div>
  </div>
</template>

<style>

.amazing-container .swiper-pagination-bullet {
  background-color: #000000 !important;
  opacity: 1 !important;
}

.amazing-container .swiper-pagination-bullet-active {
  background-color: #ffffff !important;
  opacity: 1 !important;
}

.amazing-container .swiper {
  overflow-y: visible !important;
}

.amazing-container .swiper-pagination-horizontal{
  bottom: -30px !important;
}
</style>