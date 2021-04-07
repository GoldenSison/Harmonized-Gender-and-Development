<style scoped>
  .italic{
    font-style: italic;
  }
  .small{
    font-size: .7rem !important;
  }
</style>
<template>
     <v-card class="mx-auto" width="450" min-height="100%">
        <v-list dense>
          <v-list-item>
            <v-list-item-icon>
              <v-icon class="sm">mdi-link</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Quick Links</v-list-item-title>
          </v-list-item>
          <v-list-item to="/guidelines#preface">
            <v-list-item-title class="italic small">Preface</v-list-item-title>
          </v-list-item>
          <v-list-item to="/guidelines#message">
            <v-list-item-title class="italic small">Messages</v-list-item-title>
          </v-list-item>
          <v-list-item to="/guidelines#acknowledgement">
            <v-list-item-title class="italic small">Acknowledgments</v-list-item-title>
          </v-list-item>
          <v-list-group :value="false">
            <template v-slot:activator>
              <v-list-item-title class="small">Background</v-list-item-title>
            </template>
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
              <v-list-item-title class="small">Part I. Program and project Development: General</v-list-item-title>
            </template>
          <v-list-item>
            <v-list-item-title><span class="ml-2 small">Project Design and Formulation</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><span class="ml-5 small">GAD Requirements</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><span class="ml-5 small">Guide to Accomplishing the Project Identification Checklist</span></v-list-item-title>
          </v-list-item>
 
          <v-list-item>
            <v-list-item-title><span class="ml-2 small">Project Design and Formulation</span></v-list-item-title>
          </v-list-item>
                   <v-list-item>
            <v-list-item-title><span class="ml-5 small">GAD Requirements</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><span class="ml-5 small">Guide to Accomplishing the Project Identification Checklist</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><span class="ml-2 small">Investment Program Formulation</span></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><span class="ml-2 small">Evaluation of Proposed Projects</span></v-list-item-title>
          </v-list-item>

          </v-list-group>
           <v-list-item to="/guidelines#part2">
            <v-list-item-title class="italic small">Part II. Specific Sectors</v-list-item-title>
          </v-list-item>

           <v-list-item to="/guidelines#part3">
            <v-list-item-title class="italic small">Part III. Project Implementation, Management, and Monitoring and Evaluation</v-list-item-title>
          </v-list-item>
           <v-list-item to="/guidelines#appendix_a">
            <v-list-item-title class="italic small">Appendix A: Key GAD Concepts</v-list-item-title>
          </v-list-item>
           <v-list-item to="/guidelines#appendix_b">
            <v-list-item-title class="italic small">Appendix B: Administration of the GAD Checklist</v-list-item-title>
          </v-list-item>
           <v-list-item to="/guidelines#appendix_c">
            <v-list-item-title class="italic small">Appendix C: Sample Sector-Specific GAD Monitoring Indicators</v-list-item-title>
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