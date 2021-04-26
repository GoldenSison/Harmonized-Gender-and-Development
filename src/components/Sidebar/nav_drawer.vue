<style scoped>
  .italic{
    font-style: italic;
  }
  .small{
    font-size: .8rem !important;
  }
</style>
<template>
     <v-card class="mx-auto " min-height="100%">
        <v-list dense>
          <v-list-item>
            <v-list-item-icon>
              <!-- <v-icon class="sm">mdi-link</v-icon> -->
            </v-list-item-icon>
            <v-list-item-title>Links of Contents</v-list-item-title>
          </v-list-item>
          <v-list-item to="/guidelines#preface">
            <v-list-item-title class=" small">Preface</v-list-item-title>
          </v-list-item>
          <v-list-item to="/guidelines#message">
            <v-list-item-title class=" small">Messages</v-list-item-title>
          </v-list-item>
          <v-list-item to="/guidelines#acknowledgement">
            <v-list-item-title class=" small">Acknowledgments</v-list-item-title>
          </v-list-item>
          <v-list-group :value="false">
            <template v-slot:activator>
              <v-list-item-title class="small">Background</v-list-item-title>
            </template>
            <v-list-item to="/guidelines#background">
              <v-list-item-title><span class="ml-3 small">General Background</span></v-list-item-title>
            </v-list-item>
            <v-list-item to="/guidelines#objectives">
              <v-list-item-title><span class="ml-3 small">Objectives and Contents </span></v-list-item-title>
            </v-list-item>
          <v-list-item to="/guidelines#context">
            <v-list-item-title><span class="ml-3 small">Context of the Guidelines 2</span></v-list-item-title>
          </v-list-item>
          <v-list-item to="/guidelines#feature">
            <v-list-item-title><span class="ml-3 small">Features</span></v-list-item-title>
          </v-list-item>

          </v-list-group>

          <v-list-group :value="false">
            <template v-slot:activator>
              <v-list-item-title class="small">Part I</v-list-item-title>
            </template>
          <v-list-item>
            <v-list-item-title><span class="ml-2 small">Project Design and Formulation</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><span class="ml-5 small">GAD Requirements</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><span class="ml-5 small">Guide to the Project Identification Checklist</span></v-list-item-title>
          </v-list-item>
 
          <v-list-item>
            <v-list-item-title><span class="ml-2 small">Project Design and Formulation</span></v-list-item-title>
          </v-list-item>
                   <v-list-item>
            <v-list-item-title><span class="ml-5 small">GAD Requirements</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><span class="ml-5 small">Guide to the Project Identification Checklist</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><span class="ml-2 small">Investment Program Formulation</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><span class="ml-2 small">Evaluation of Proposed Projects</span></v-list-item-title>
          </v-list-item>

          </v-list-group>
           <v-list-item to="/guidelines#part2">
            <v-list-item-title class=" small">Part II</v-list-item-title>
          </v-list-item>

           <v-list-item to="/guidelines#part3">
            <v-list-item-title class=" small">Part III</v-list-item-title>
          </v-list-item>
           <v-list-item to="/guidelines#appendix_a">
            <v-list-item-title class=" small">Appendix A</v-list-item-title>
          </v-list-item>
           <v-list-item to="/guidelines#appendix_b">
            <v-list-item-title class=" small">Appendix B</v-list-item-title>
          </v-list-item>
           <v-list-item to="/guidelines#appendix_c">
            <v-list-item-title class=" small">Appendix C</v-list-item-title>
          </v-list-item>
          
        </v-list>
      </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>