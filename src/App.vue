<template>
  <v-app id="inspire">
    <!-- Sidebar  -->
    <v-navigation-drawer v-model="drawer" app width="325" class="d-print-none">
      <sidebar v-show="show_sidebar" />
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar app class=" d-print-none" dense>
      
      <!-- Sidebar Toggle icon -->
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="show_sidebar">
        <v-icon color="black" large>mdi-book</v-icon>
      </v-app-bar-nav-icon>

      <!-- Website Title -->
      <v-toolbar-title>Harmonized Gender and Development</v-toolbar-title>

      <!-- Main Menu Navigation -->
      <v-toolbar-items class="ml-auto">
        <v-btn rounded text to="/">Home</v-btn>
        <v-btn rounded text to="/Guidelines" @click="open_guidelines">GuideLines</v-btn>
        <v-btn rounded text to="/Evaluation">Evaluation</v-btn>

        <!-- Background Music Controls -->
        <v-btn icon x-small color="black" @click="toggle_bg_music">
          <v-icon v-if="bgmusic">mdi-volume-high</v-icon>
          <v-icon v-else>mdi-volume-mute</v-icon>
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>

    <!-- Audio Asset -->
    <audio ref="bgmusic" loop autoplay src="@/assets/bg.mp3" type="audio/mp3"></audio>

    <!-- Main Content area -->
      <v-main >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                 <!-- Router view area -->
                  <router-view></router-view>
            </v-col>
          </v-row>
      </v-main>
  </v-app>
</template>

<script>
import sidebar from './components/Sidebar/nav_drawer'
import bgimage from '@/assets/bg.jpg'
export default {
  name: 'App',
  components: {
    sidebar
  },
  data: () => ({
    drawer: false,
    bgmusic: null,
    bgimage
  }),
  computed: {
    show_sidebar: function () {
      if (this.$route.name != "Guidelines") {
        this.drawer = false;
        return false;
      }
      return true;
    }
  },
  methods: {
    toggle_bg_music: function () {
      this.bgmusic = !this.bgmusic;
    },

    open_guidelines: function () {
      this.drawer = true;
      if (this.bgmusic == null) {
        this.bgmusic = true;
      }
    }
  },
  watch: {
    bgmusic: function () {
      if (this.bgmusic) {
        this.$refs.bgmusic.play();
      } else {
        this.$refs.bgmusic.pause();
      }
    }
  },
  mounted: function () {
    if (this.bgmusic) {
      this.$refs.bgmusic.play();
    } else {
      this.$refs.bgmusic.pause();
    }
  }
};
</script>
