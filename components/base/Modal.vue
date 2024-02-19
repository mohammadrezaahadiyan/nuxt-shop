<script setup lang="ts">

defineProps({

  modelValue: {
    default: false,
    type: String
  },

})

const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <Transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">

    <div :class="['remodal-wrapper', {'remodal-is-opened': modelValue}]"
         :style="{'display': modelValue ? 'block' : 'none'}" @click.self="emit('update:modelValue', false)"
         v-if="modelValue">
      <div :class="['remodal remodal-lg', 'remodal-is-initialized', {'remodal-is-opened': modelValue}]" tabindex="-1">

        <div class="remodal-header">
          <button @click="emit('update:modelValue', false)" class="remodal-close"></button>
        </div>

        <div class="remodal-content">
          <slot/>
        </div>

        <div class="remodal-footer">
          <slot name="footer"/>
        </div>

      </div>
    </div>

  </Transition>
</template>

<style scoped>
.remodal-wrapper {
  background: #00000066;
}
</style>