<script setup lang="ts">
import {useField} from 'vee-validate'

const props = defineProps({

  name: {
    type: String,
    required: true
  },
  modelValue: {
    default: ''
  },
  label: {
    default: '',
    type: String
  },
  placeholder: {
    default: '',
    type: String
  },
  type: {
    default: 'text',
    type: String
  },
  autocomplete: {
    default: 'off',
    type: String
  }

})

const {
  errorMessage,
  value: inputValue,
  handleChange,
  setValue
} = useField(props.name, undefined, {
  initialValue: props.modelValue
})

const emit = defineEmits(["update:modelValue"])

const handleInputChange = (e: any) => {
  emit("update:modelValue", e.target.value)
  handleChange(e)
}

watch(
    () => props.modelValue,
    val => {
      setValue(val)
    }
)
</script>

<template>

  <div class="form-element-row">
    <label class="label fs-7">{{ label }}</label>
    <input
        :value="inputValue"
        :type="type"
        :class="['form-control mb-3', {'errorInput': errorMessage}]"
        :placeholder="placeholder"
        :name="name"
        :autocomplete="autocomplete"
        @input="handleInputChange"
    />
  </div>
  <span v-if="errorMessage">{{ errorMessage }}</span>

</template>

<style scoped>

</style>