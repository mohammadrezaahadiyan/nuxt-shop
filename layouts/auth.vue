<script setup lang="ts">

useHead({
  link: [
    {rel: 'stylesheet', href: '/css/dependencies.css'},
    {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}
  ]
})

</script>

<template>

  <div class="page-wrapper">
    <header class="page-mini-header py-4">
      <div class="d-flex justify-content-center">
        <div class="logo-container">
          <nuxt-link to="/" class="logo"><img src="/images/logo-dark.svg" width="120" alt=""></nuxt-link>
        </div>
      </div>
    </header>
    <main class="page-content page-auth">
        <slot/>
    </main>
    <footer class="page-mini-footer">
      <div class="d-flex justify-content-center py-5">
        <div class="logo-container">
          <nuxt-link to="/" class="logo"><img src="/images/logo-dark.svg" width="120" alt=""></nuxt-link>
        </div>
      </div>
      <div class="copy-right bg-light py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-md-0 mb-4">
              <div class="text-muted text-md-start text-center">کليه حقوق اين سايت متعلق به mhmdrzax
                می‌باشد.
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-muted text-md-end text-center">mhmdrzax - 2024 © Copyright</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>

</template>

<style scoped>

</style>