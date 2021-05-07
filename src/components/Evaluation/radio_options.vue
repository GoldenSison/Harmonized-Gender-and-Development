<style scoped>
  .small_label >>> label{
    font-size: .8rem !important;
  }
</style>

<template>
   <v-radio-group row class="small_label" v-model="radio_value" :rules="[rules]">
        <v-radio label="No" value="0"/>
        <v-radio label="Partly" value="1"/>
        <v-radio label="Yes" value="2"/>
    </v-radio-group>
</template>

<script>
export default {
    props:[
        'quiz_name',
        'num'
    ],
    computed:{
        radio_value:{
            get:function(){
                return this.$store.state[this.quiz_name][this.num];
            },
            set:function(value){
                let payload = {
                    'quiz_name':this.quiz_name,
                    'num':this.num,
                    'value':value,
                }
                this.$store.commit('set_item_answer',payload)
            }
        }
    },
    methods:{
        rules: v => !!v || '',

    }
}
</script>