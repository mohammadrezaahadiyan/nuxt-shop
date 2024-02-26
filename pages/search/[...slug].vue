<script setup lang="ts">

import {useProductStore} from "~/stores/productStore";

const productStore =useProductStore()

onMounted(async () => {
  const filterParams = productStore.getFilterParams()
  await productStore.getProducts()
  console.log(productStore.filteredProducts)
})

</script>

<template>

  <div class="row">
    <ArchiveSideBar/>
    <div class="col-xl-9 col-lg-8 col-md-7">
      <ArchiveBreadCrumb/>

      <button class="btn btn-primary mb-3 d-md-none toggle-responsive-sidebar">فیلتر پیشرفته
        <i class="ri-equalizer-fill ms-1"></i></button>

      <div class="listing-products">
        <div class="listing-products-header mb-4">
          <div class="listing-products-filter-container do-simplebar me-sm-4">
            <div class="listing-products-filter">
              <ArchiveOrderTab/>
            </div>
          </div>
          <!-- start of listing-products-view -->
          <div class="listing-products-view d-sm-flex d-none">
            <button class="btn btn-outline-light btn-grid-view me-2"><i
                class="ri-grid-line"></i></button>
            <button class="btn btn-outline-light btn-list-view"><i
                class="ri-list-check-2"></i></button>
          </div>
          <!-- end of listing-products-view -->
        </div>
        <div class="listing-products-content">
          <!-- start of tab-content -->
          <div class="tab-content">
            <div class="tab-pane fade show active">
              <div class="ui-box pt-3 pb-0 px-0 mb-4">
                <div class="ui-box-content">
                  <div class="row mx-0">
                    <div
                        class="product-card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
                      <!-- start of product-card -->
                      <div class="product-card">
                        <div class="product-thumbnail">
                          <a href="#">
                            <img src="/images/products/01.jpg"
                                 alt="product title">
                          </a>
                        </div>
                        <div class="product-card-body">
                          <h2 class="product-title">
                            <a href="#">گوشی موبایل اپل مدل iPhone 13 A2634 دو
                              سیم‌ کارت
                              ظرفیت 128
                              گیگابایت و رم 4 گیگابایت</a>
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
                              <del class="price-old">26,900,000</del>
                              <span class="discount ms-2">%2</span>
                            </div>
                            <span class="price-now">26,249,000 <span
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
                      <!-- end of product-card -->
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of tab-content -->
         <ArchivePagination/>
        </div>
      </div>
      <div class="responsive-sidebar-overlay"></div>
    </div>
  </div>
  
</template>

<style scoped>

</style>