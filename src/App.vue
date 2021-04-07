<style>
@media print{
    .noPrint{
        display:none;
    }
}
</style>
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app width="450" light class="noPrint">
      <!-- Sidebar  -->
      <sidebar/>
    </v-navigation-drawer>
  <!-- App Bar -->
    <v-app-bar app dense class="noPrint">
      <v-app-bar-nav-icon @click="drawer = !drawer" ><v-icon large>mdi-book</v-icon> </v-app-bar-nav-icon>
      <v-toolbar-title>Harmonized Gender And Development</v-toolbar-title>
      <v-toolbar-items class="ml-auto">
         <v-btn text to="/">Home</v-btn>
         <v-btn text to="/Guidelines" @click="drawer = true">GuideLines</v-btn>
         <v-btn text to="/Evaluation">Evaluation</v-btn>
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
  components:{
    sidebar
  },
 data: () => ({
   drawer: false,
   admins: [
     ['Management', 'mdi-account-multiple-outline'],
     ['Settings', 'mdi-cog-outline'],
   ],
   cruds: [
     ['GAD Requirements'],
     ['Guide to Accomplishing the Project Identification Checklist'],
   ],
 }),
};
</script>
