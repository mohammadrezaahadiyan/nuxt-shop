<script setup lang="ts">

defineProps({

  size: {
    default: "normal",
    type: String
  },
  wFull: {
    default: false,
    type: Boolean
  },
  outline:{
    default: false,
    type: Boolean
  },
  color: {
    default: "primary",
    type: String
  },
  loading:{
    default: false,
    type: Boolean
  }
})

</script>

<template>
  <button :class="['btn',
  {'btn-sm': size === 'sm'},
  {'btn-md': size === 'md'},
  {'btn-lg': size === 'lg'},
  {'w-100': wFull},
  outline ? `btn-outline-${color}` : `btn-${color}`
  ]">
    <div v-if="loading" class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
    <slot/>
    <slot name="icon"/>
  </button>
</template>

<style scoped>

.spinner-border {

  margin-left: .5rem;
  height: 1rem;
  width: 1rem;
}

</style>