<script setup lang="ts">
import {Form} from 'vee-validate'
import {RegisterUser} from "~/services/auth.service";
import type {RegisterCommandDTo} from "~/models/auth/registerDTo";
import * as Yup from "yup"

useHead({
  title: 'ثبت نام'
})
definePageMeta({
  layout: 'auth',
  pageTransition: {name: 'page', mode: 'out-in'},
})

const router = useRouter()
const loading = ref(false)

const registerSchema = Yup.object().shape({

  phoneNumber: Yup.string().matches(/^09\d{9}$/, 'شماره تماس معتبر نیست').required('این فیلد اجباری است'),
  password: Yup.string().required('این فیلد اجباری است').min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد').matches(/^(?=.*[0-9])(?=.*\$)(?=.*[A-Z]).+$/, 'رمز عبور ضعیف است'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'کلمه عبور همسان نیست')
})

const registerData: RegisterCommandDTo = reactive({
  phoneNumber: '',
  password: '',
  confirmPassword: ''
})
const register = async () => {

  loading.value = true
  const result = await RegisterUser(registerData)
  loading.value = false

  if(result.isSuccess){
    router.push('/auth/login')
  }else {
    //Toast
    alert(result.metaData.message)
  }
}
</script>

<template>

  <div class="auth-container">
    <div class="auth-title mb-3">ورود به حساب کاربری</div>

    <div class="auth-box ui-box">
      <Form @submit="register" :validation-schema="registerSchema" class="auth-form" v-slot="{meta}">

        <BaseInput v-model="registerData.phoneNumber" name="phoneNumber" label="شماره تماس"
                    placeholder="شماره تماس همراه خود را وارد کنید"
                    />
        <BaseInput v-model="registerData.password" type="password" name="password" label="رمز عبور"
                    placeholder="رمز عبور خود را وارد کنید"
                   />
        <BaseInput v-model="registerData.confirmPassword" type="password" name="confirmPassword"
                    label="تکرار رمز عبور"
                    placeholder="رمز عبور خود را تایید کنید"/>

        <div class="form-element-row mb-3">
          <base-button type="submit" :disabled="!meta.valid || loading" w-full :loading="loading">ثبت نام</base-button>
        </div>

        <nuxt-link to="./login" class="link">ورود</nuxt-link>
        <hr/>

        <div class="form-element-row">
          <div>با ورود و یا ثبت نام در سایت شما <a href="#" class="link">شرایط و
            قوانین</a> استفاده
            از تمام سرویس های
            سایت و <a href="#" class="link">قوانین حریم خصوصی</a> آن را می‌پذیرید.
          </div>
        </div>
      </Form>

    </div>
  </div>

</template>

<style scoped>

</style>