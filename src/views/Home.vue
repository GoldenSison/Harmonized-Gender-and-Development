<style scoped>
  .small_font{
    font-size: .8rem;
  }
  p{
    font-family: sans-serif !important;
  }
</style>
<template>
  <v-container>
    <!-- <v-carousel interval="5000" cycle>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
        transition="fade-transition"></v-carousel-item>
    </v-carousel> -->
    <v-img :src="banner_img" contain/>
    <v-row>
      <v-col>
        <div class="d-flex flex-column my-3 small_font">
          <p class="my-0">A project of the National Economic and Development Authority, </p>
          <p class="my-0">The Phillippine commission on women, and of the Official Development Assistance Gender and </p>
          <p class="my-0">Development Network(ODA-GAD Network)</p>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column my-3 ml-auto small_font">
        <p class="my-0">National Economic and Development Authority</p>
        <p class="my-0">Phillippine Commission on Women</p>
        <p class="my-0"> Official Development Assistance Gender and Development Network </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import banner from '../assets/hgdg banner.jpg'
export default {
  name: 'Home',

  data () {
      return {
        banner_img:banner,
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },

}
</script>
