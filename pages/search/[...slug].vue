<script setup lang="ts">
import {useProductStore} from "~/stores/productStore";

const route = useRoute()
const router = useRouter()
const productStore =useProductStore()

const viewType = ref(0)

onMounted(async () => {
  await productStore.getProducts()
  const filteredProducts = productStore.filteredProducts
})

watch(
    () => route.query,
    async () => {
      await productStore.getProducts()
      const filteredProducts = productStore.filteredProducts
    }
)
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
            <button @click="viewType=0" class="btn btn-outline-light btn-grid-view me-2"><i
                class="ri-grid-line"></i></button>
            <button @click="viewType=1" class="btn btn-outline-light btn-list-view"><i
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
                    <div :class="['product-card-container mb-4',
                    {'col-xl-12 col-lg-8 col-md-6 col-sm-6 d-flex flex-wrap gap-3': viewType == 0 },
                    {'col-lg-6 col-md-12 col-sm-6': viewType == 1}
                    ]">
                      <ArchiveProductCard v-for="product in productStore.filteredProducts" :key="product.id" :product="product" :class="{'product-card-horizontal': viewType == 1}"/>
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