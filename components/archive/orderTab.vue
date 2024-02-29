<script setup lang="ts">
import {ProductSearchResultOrderBy} from "~/models/search/searchResultDto";

const router = useRouter()
const route = useRoute()
const selectedTab: Ref<ProductSearchResultOrderBy> = ref(ProductSearchResultOrderBy.Latest)

const changeTab = (orderBy:ProductSearchResultOrderBy) => {

  selectedTab.value = orderBy

  const currentPath = route.path
  const queryParams = route.query
  router.push({
    path: currentPath,
    query: {...queryParams, searchOrderBy:orderBy}
  })

}

</script>

<template>

  <ul class="nav nav-pills nav-tabs align-items-center">
    <li class="d-inline-flex align-items-center nav-item me-3 text-muted">
      <i class="ri-equalizer-line me-2"></i>
      مرتب سازی بر اساس:
    </li>
    <li class="nav-item" @click="changeTab(ProductSearchResultOrderBy.Latest)">
      <button :class="['nav-link',{'active': selectedTab === ProductSearchResultOrderBy.Latest}]" type="button">جدید ترین
      </button>
    </li>
    <li class="nav-item" @click="changeTab(ProductSearchResultOrderBy.Cheapest)">
      <button :class="['nav-link',{'active': selectedTab === ProductSearchResultOrderBy.Cheapest}]" type="button">ارزان ترین
      </button>
    </li>
    <li class="nav-item" @click="changeTab(ProductSearchResultOrderBy.Expensive)">
      <button :class="['nav-link',{'active': selectedTab === ProductSearchResultOrderBy.Expensive}]" type="button" >گران
        ترین
      </button>
    </li>
  </ul>

</template>

<style scoped>

</style>