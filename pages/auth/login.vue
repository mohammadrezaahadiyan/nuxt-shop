<script setup lang="ts">
import {Form} from 'vee-validate'
import {LoginUser} from "~/services/auth.service";

definePageMeta({
  layout: 'auth',
  pageTransition:{name: 'page', mode: 'out-in'}
})
useHead({
  title: 'ورود'
})

const router = useRouter()
const loading = ref(false)
const loginData = reactive({
  phoneNumber: '',
  password:''
})

const login = async (data:any, formEvent:any) => {
  loading.value = true
  const result = await LoginUser(loginData)
  loading.value = false

  if(result.isSuccess){
    localStorage.setItem('auth-data', JSON.stringify(result.data))
    await router.push('/')
  }else {
    formEvent.setFieldError("phoneNumber", 'کاربری با مشخصات وارد شده یافت نشد')
  }
}
</script>

<template>

  <div class="auth-container">
    <div class="auth-title mb-3">ورود به حساب کاربری</div>

    <div class="auth-box ui-box">
      <Form @submit="login" class="auth-form" v-slot="{meta}">

        <BaseInput v-model="loginData.phoneNumber" name="phoneNumber" label="تلفن" placeholder="شماره تماس خود را وارد کنید"/>
        <BaseInput v-model="loginData.password" type="password" name="password" label="رمز عبور" placeholder="رمز عبور خود را وارد کنید"/>

        <div class="form-element-row mb-3">
          <base-button type="submit" :disabled="!meta.valid || loading" w-full size="ms" :loading="loading">ورود</base-button>
        </div>

        <nuxt-link to="./register" class="link">ثبت نام</nuxt-link>
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