<script setup lang="ts">
import type {ProductCardDto} from "~/models/productCard";
import {getProductImage} from "~/utilities/imageUrls";

const props = defineProps<{
  product:ProductCardDto
  viewType:number
}>()

</script>

<template>

  <div class="product-card justify-content-center"
       :style="[viewType == 0 ? {'width': '215px'} : {'width': '100%', 'margin': '0 10px 10px 0'}]">
    <div class="product-thumbnail">
      <a href="#">
        <img :src="getProductImage(product.imageName)"
             :alt="product.title">
      </a>
    </div>
    <div class="product-card-body">
      <h2 class="product-title">
        <a href="#">{{ product.title }}</a>
      </h2>
      <div class="product-variant">
        <span class="color" style="background-color: #d4d4d4;"></span>
        <span class="color"
              style="background-color: #e86841;"></span>
        <span class="color"
              style="background-color: #b82c32;"></span>
        <span>+</span>
      </div>
      <div class="product-price fa-num">
        <div class="d-flex align-items-center">
          <del class="price-old">{{ product.price }}</del>
          <span class="discount ms-2">{{ product.discountPercentage }}</span>
        </div>
        <span class="price-now">{{ product.totalPrice }}<span
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
          <strong>۴.۴</strong>
          <span>(۴۳۶)</span>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>