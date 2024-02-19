<script setup lang="ts">

defineProps({

  showText: {
    default: 'نمایش بیشتر',
    type: String
  },
  closeText: {
    default: 'نمایش کمتر',
    type: String
  },
  height:{
    default: 100,
    type: Number
  }

})

const isOpen = ref(false)
</script>

<template>

  <div :class="['expandable-text pt-1', {'active': isOpen}]" :style="{'height': `${height}px`}">

    <div class="expandable-text fa-num">
      <slot/>
    </div>

    <div class="expandable-text-expand-btn justify-content-start text-sm">

      <span :class="['show-less', {'d-none': !isOpen}]" @click="isOpen = false">
        {{ closeText }}
        <i class="ri-arrow-up-s-line ms-2"></i>
      </span>

      <span :class="['show-more', {'d-none': isOpen}]" @click="isOpen = true">
        {{ showText }}
        <i class="ri-arrow-down-s-line ms-2"></i>
      </span>

    </div>
  </div>

</template>

<style scoped>

</style>