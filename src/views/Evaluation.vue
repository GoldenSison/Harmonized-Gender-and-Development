<template>
  <div class="guidelines">
      <v-row class="d-flex justify-center mt-5">
        <v-col cols="10">
            <!-- <quiz1/> -->
            <fq/>  
        </v-col>
      </v-row>
  </div>
</template>
<script>
import quiz1 from '../components/Evaluation/Quiz1'
import fq from '../components/Evaluation/FinalQuiz'
  export default {
    components:{
      fq,
      quiz1
    },
    data () {
      return {
      }
    },
  }
</script>