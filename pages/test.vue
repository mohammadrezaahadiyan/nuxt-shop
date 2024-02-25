<script setup lang="ts">
import * as Yup from "yup";
import {Form} from "vee-validate"
import {FetchApi} from "~/utilities/CustomFetchApi";
import {useCategoryStore} from "~/stores/categoryStore";

const categoryStore = useCategoryStore();

onMounted(async () => {
  await categoryStore.setData()

})

const items = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
]

const email = ref("")
const currentPage = ref(0)
const formSchema = Yup.object().shape({
  email: Yup.string().required().email()
})

const isOpenModal = ref(false)

onMounted(async () => {
  let res = await FetchApi('/banner')
})

</script>

<template>

  <div v-if="categoryStore.categoryData">

    <span v-for="item in categoryStore.categoryData" :key="item">
      {{ item.title }}
    </span>

  </div>

  <div>
    <base-button w-full outline size="lg" @click="isOpenModal = true">
      ثبت نام کاربر
    </base-button>
  </div>

  <base-modal v-model="isOpenModal">
    <h1>همین حالا ثبت نام کنید</h1>

    <template #footer>
      <base-button color="success" size="sm">تایید</base-button>
    </template>

  </base-modal>

  <base-show-more>

    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
    ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
    تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
    کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
    مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
  </base-show-more>

  {{ email }}
  <Form :validation-schema="formSchema">

    <base-input name="email" label="ایمیل" v-model="email"></base-input>

  </Form>

  <h1>SLIDER</h1>

  <Swiper
      :modules="[SwiperEffectCreative]"
      :slides-per-view="4"


  >

    <SwiperSlide v-for="slide in 10" :key="slide">
      {{ slide }}
    </SwiperSlide>

  </Swiper>

  <v-tabs>
    <v-tab>
      asdsad
    </v-tab>
    <v-tab>
      asdsadsa2222
    </v-tab>
  </v-tabs>
  <v-btn>
    btn
  </v-btn>

</template>

<style scoped>

</style>