<script setup lang="ts">
import type {FilterResult} from "~/models/base/filterResults";
import {rangeNumber} from "~/utilities/objectutils";

const route = useRoute()
const router = useRouter()

const props = defineProps<{
  paginationData:FilterResult<any>
}>()

const changePageId = async (pageId: number) => {
  let currentPath = route.path
  let queryParams = route.query

  await router.push({
    path: currentPath,
    query: {...queryParams, pageId}
  })
}

</script>

<template>

  <div class="row">
    <div class="col-12">
      <nav class="border-top py-4">
        <!-- start of pagination -->
        <ul class="pagination justify-content-center fa-num">
          <li class="page-item" v-if="paginationData.currentPage > 1">
            <a class="page-link" href="#" aria-label="Previous" @click="changePageId(props.paginationData.currentPage - 1)">
              <i class="ri-arrow-right-s-line"></i>
            </a>
          </li>
          <li :class="['page-item', {'active': item==props.paginationData.currentPage}]"
              v-for="item in rangeNumber(props.paginationData.startPage, props.paginationData.endPage)" :key="item">
            <a class="page-link" href="#">
            {{ item }}
          </a>
          </li>
          <li class="page-item" v-if="paginationData.currentPage < paginationData.pageCount">
            <a class="page-link" href="#" aria-label="Next" @click="changePageId(props.paginationData.currentPage + 1)">
              <i class="ri-arrow-left-s-line"></i>
            </a>
          </li>
        </ul>
        <!-- end of pagination -->
      </nav>
    </div>
  </div>

</template>

<style scoped>

</style>