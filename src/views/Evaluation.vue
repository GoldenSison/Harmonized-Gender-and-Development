<template>
  <div class="guidelines">
      <v-row class="d-flex justify-center mt-5">
        <v-col cols="10">
            <quiz1/>
        </v-col>
      </v-row>
  </div>
</template>
<script>
// import q1form from '../components/Evaluation/Q1'
import quiz1 from '../components/Evaluation/Quiz1'
  export default {
    components:{
      // q1form,
      quiz1
    },
    data () {
      return {
      }
    },
  }
</script>