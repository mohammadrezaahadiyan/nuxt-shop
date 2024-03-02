<script setup lang="ts">

const categoryStore = useCategoryStore()
const router = useRouter()
const route = useRoute()

const currentCategory = ref(route.path.split('/')[2]?.split('category-')[1])
const searchParam = ref('')
const isOpen = ref(false)

onMounted( async () => {
  await categoryStore.setData()
})

const searchItem = () => {
  const currentPath = route.path
  const queryParams = route.query
  router.push({
    path: currentPath,
    query: {...queryParams, search:searchParam.value}
  })
  searchParam.value = ''
}

const filteredByCategory = (slug:any) => {

  const currentPath = route.path
  const queryParams = route.query
  router.push({
    path: currentPath,
    query: {...queryParams, categorySlug: slug}
  })

}
</script>

<template>

  <div class="col-xl-3 col-lg-4 col-md-5 responsive-sidebar">
    <div class="ui-sticky ui-sticky-top">
      <div class="ui-box sidebar-widgets">
        <!-- start of widget -->
        <div class="widget p-0 mb-3">
          <div class="widget-content widget--free-shipping">
            <div class="free-shipping--detail">
              <div class="title">ارسال رایگان سفارش</div>
              <div class="subtitle">سفارش‌های بالای ۳۰۰ هزار تومان</div>
            </div>
            <div class="free-shipping--banner">
              <img src="/images/theme/free-shipping--banner.png"
                   alt="ارسال رایگان سفارش">
            </div>
          </div>
        </div>
        <!-- end of widget -->
        <!-- start of widget -->
        <div class="widget mb-3">
          <div class="widget-title">دسته‌بندی نتایج</div>
          <div class="widget-content widget--category-results">
            <ul v-if="categoryStore.categoryData && categoryStore.categoryData.length > 0">
              <li :class="{'category--arrow-left': item.slug !== currentCategory, 'category--arrow-down': item.slug == route.query.slug}"
                  v-for="item in categoryStore.categoryData" :key="item.id">
                <a         @click="filteredByCategory(item.slug)"
                           :class="{'current': item.slug == currentCategory}"
                >
                  {{ item.title }}</a>
                <ul v-if="item.childs">
                  <li :class="{'d-none': item.slug !== currentCategory}" v-for="child in item.childs" :key="child.id">
                    <span      @click="filteredByCategory(child.slug)"
                               :class="{'current': item.slug == route.query.slug}"
                    >
                      {{ child.title }}</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!-- end of widget -->
        <!-- start of widget -->
        <div class="widget mb-3">
          <div class="widget-title">جستجو در نتایج:</div>
          <div class="widget-content widget--search">
            <form @submit.prevent="searchItem">
              <div class="form-element-row">
                <input v-model="searchParam" type="text" class="form-control"
                       placeholder="نام محصول یا…">
                <i class="ri-search-line icon"></i>
              </div>
            </form>
          </div>
        </div>
        <!-- end of widget -->
        <!-- start of widget -->
        <div class="widget py-1 mb-3">
          <div class="widget-content widget--filter-switcher">
            <div class="d-flex border-bottom pb-1 mb-2">
              <i class="ri-user-2-fill text-primary me-2"></i>
              <span class="fs-7">با خرید از کالاهایی با امکان ارسال توسط فروشنده سفارش خود را
                زودتر تحویل بگیرید </span>
            </div>
            <div class="form-check form-switch mb-0">
              <input class="form-check-input" type="checkbox" id="has_ship_by_seller">
              <label class="form-check-label" for="has_ship_by_seller">امکان ارسال توسط
                فروشنده</label>
            </div>
          </div>
        </div>
        <!-- end of widget -->
        <!-- start of widget -->
        <div class="widget py-1 mb-3">
          <div class="widget-content widget--filter-switcher">
            <div class="form-check form-switch mb-0">
              <input class="form-check-input" type="checkbox" id="has_jet_delivery">
              <label class="form-check-label" for="has_jet_delivery">فقط ارسال
                فوری</label>
            </div>
          </div>
        </div>
        <!-- end of widget -->
        <!-- start of widget -->
        <div class="widget py-1 mb-3">
          <div class="widget-content widget--filter-switcher">
            <div class="form-check form-switch mb-0">
              <input class="form-check-input" type="checkbox" id="has_selling_stock">
              <label class="form-check-label" for="has_selling_stock">فقط کالاهای
                موجود</label>
            </div>
          </div>
        </div>
        <!-- end of widget -->
        <!-- start of widget -->
        <div class="widget widget-collapse">
          <div class="widget-title widget-title--collapse-btn" data-bs-toggle="collapse"
               data-bs-target="#collapsePriceFilter" aria-expanded="false"
               aria-controls="collapsePriceFilter" role="button">محدوده قیمت
          </div>
        </div>
        <!-- end of widget -->
      </div>
    </div>
  </div>

</template>

<style scoped>

.current{
  font-weight: bolder !important;
  color: #2962ff !important;
}

</style>