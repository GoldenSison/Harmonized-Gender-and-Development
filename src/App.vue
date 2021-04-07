<style>
@media print{
    .noPrint{
        display:none;
    }
}
</style>
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app width="450" light class="noPrint" >
      <!-- Sidebar  -->
      <sidebar v-show="show_sidebar"/>
    </v-navigation-drawer>
  <!-- App Bar -->
    <v-app-bar app dense class="noPrint">
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="show_sidebar"><v-icon large>mdi-book</v-icon> </v-app-bar-nav-icon>
      <v-toolbar-title>Harmonized Gender And Development</v-toolbar-title>
      <v-toolbar-items class="ml-auto">
         <v-btn text to="/">Home</v-btn>
         <v-btn text to="/Guidelines" @click="open_guidelines" >GuideLines</v-btn>
         <v-btn text to="/Evaluation">Evaluation</v-btn>
         <v-btn icon x-small color="black" @click="toggle_bg_music">
           <v-icon v-if="bgmusic">mdi-volume-high</v-icon>
           <v-icon v-else>mdi-volume-mute</v-icon>
         </v-btn>
         <audio ref="bgmusic" loop autoplay src="@/assets/bg.mp3" type="audio/mp3"></audio>

      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import sidebar from './components/Sidebar/nav_drawer'

export default {
  name: 'App',
  components: {
    sidebar
  },
  data: () => ({
    drawer: false,
    bgmusic:null,
  }),
  computed:{
    show_sidebar:function(){
      if(this.$route.name != "Guidelines"){
        this.drawer =false;
        return false;
      }
      return true;
    }
  },
  methods:{
    toggle_bg_music:function(){
      this.bgmusic = !this.bgmusic;
    },
   
    open_guidelines:function(){
      this.drawer = true;
      if(this.bgmusic ==null ){
        this.bgmusic = true;
      }
    }
  },
  watch:{
    bgmusic:function(){
      if(this.bgmusic){
        this.$refs.bgmusic.play();
      }else{
        this.$refs.bgmusic.pause();
      }
    }
  },
  mounted:function(){
    if(this.bgmusic){
        this.$refs.bgmusic.play();
      }else{
        this.$refs.bgmusic.pause();
    }
  }
};
</script>
