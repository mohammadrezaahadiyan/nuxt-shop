<script setup lang="ts">

useHead({
  link: [
    {rel: 'stylesheet', href: '/css/dependencies.css'},
    {rel:"stylesheet",  href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}
  ],
  script:[
    {src: '/js/dependencies/bootstrap.bundle.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/bootstrap-slider.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/fancybox.umd.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/iziToast.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/jquery.countdown.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/jquery.simple.timer.min.js' ,tagPosition: 'bodyClose'},
    // {src: '/js/dependencies/jquery-3.6.0.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/nouislider.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/remodal.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/select2.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/simplebar.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/swiper-bundle.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/wNumb.js' ,tagPosition: 'bodyClose'},
    {src: '/js/dependencies/zoomsl.min.js' ,tagPosition: 'bodyClose'},
    {src: '/js/custom.js',tagPosition: 'bodyClose'},
    {src: '/js/theme.js', tagPosition: 'bodyClose' },
    {src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'},
    {src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js'},
    {src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.js'},
    {src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js'},
  ]
})
</script>

<template>

  <div class="page-wrapper">
    <Head>
      <Link href="/css/dependencies.css" rel="stylesheet"/>
    </Head>
    <!-- start of page-header -->
    <TheMainHeader/>
    <!-- end of page-header -->
    <TheMobileHeader/>
    <!-- start of page-content -->
    <main class="page-content">
      <div class="container">
        <slot/>
      </div>
    </main>
    <!-- end of page-content -->
    <TheFooter/>
  </div>

</template>

<style scoped>

</style>