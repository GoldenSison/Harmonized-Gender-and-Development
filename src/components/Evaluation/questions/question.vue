<style scoped>
  .small_label >>> label{
    font-size: .8rem !important;
  }
  .text_question{
      font-size: .8rem !important;
  }
  .order{
      width: 5rem;
      max-width: 2rem;
      text-align: left;
  }
  .large_text{
      font-size: 1.1rem !important;
  }
</style>
<template>
    <v-sheet class="question" width="100%">
        <v-row class="d-flex align-center">
            <v-col v-if="!settings.has_sub_item" cols="7" class="d-flex justify-start align-center px-5 align-center">
                <span class="order ml-5">{{settings.number}}</span>
                <span class="text_question text-left">{{settings.text}}</span>
            </v-col>
            <v-col v-else cols="12" class="d-flex justify-start align-center px-5 align-center large_text">
                <h3 class="order">{{settings.number}}</h3>
                <h3 class="text_question text-left large_text">{{settings.text}}</h3>
            </v-col>
            <v-col cols="3" v-if="!settings.has_sub_item">
                <v-radio-group row class="small_label">
                        <v-radio v-for="n in 3" :label='options[n-1]' :key="n" :value="vuex_data" />
                </v-radio-group>
            </v-col>
            <v-col cols="2" v-if="!settings.has_sub_item">
                <v-textarea outlined dense label="Comments" rows="1" no-resize hide-details=""/>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
export default {
    props:[
        'settings','vuex_num','quiz_name'
    ],
    data:()=>({
        options:['Yes','Partly','No'],
    }),
    computed:{
        vuex_data: function(){
                return this.$store.state[this.quiz_name][this.vuex_num];
        }
    },
    methods:{

    }
}
</script>