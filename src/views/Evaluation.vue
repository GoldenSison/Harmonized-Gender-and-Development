<template>
  <div class="guidelines">
    <v-card width="100%" class="mx-auto my-5" >
      <h2 class="text-center">Evaluation Title</h2>
      <q1form/>
    </v-card>
  </div>
</template>
<script>
import q1form from '../components/Evaluation/Q1'
  export default {
    components:{
      q1form
    },
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>