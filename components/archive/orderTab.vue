<script setup lang="ts">

</script>

<template>

  <v-tabs
      fixed-tabs
      bg-color="indigo-darken-2"
  >
    <v-tab>
      پربازدید ترین
    </v-tab>
    <v-tab>
      پر فروش ترینن
    </v-tab>
    <v-tab>
     محبوب ترین
    </v-tab>
    <v-tab>
      جدید ترین
    </v-tab>
    <v-tab>
      ارزان ترین
    </v-tab>
    <v-tab>
      گران ترین
    </v-tab>
  </v-tabs>

  <ul class="nav nav-pills nav-tabs align-items-center">
    <li class="d-inline-flex align-items-center nav-item me-3 text-muted">
      <i class="ri-equalizer-line me-2"></i>
      مرتب سازی بر اساس:
    </li>
    <li class="nav-item">
      <button class="nav-link active" type="button"
      >پربازدید ترین
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" type="button">پرفروش
        ترین
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" type="button">محبوب
        ترین
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" type="button">جدید ترین
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" type="button">ارزان ترین
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" type="button" >گران
        ترین
      </button>
    </li>
  </ul>

</template>

<style scoped>

</style>