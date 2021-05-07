
<style scoped>
    .headline{
        display: flex;
        justify-content: center;
        align-content: center;
    }
</style>
<template>
    <div>
        <v-form ref="form" v-model="valid">
            <v-sheet outlined>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Element or requirement
                                </th>
                                <th>
                                    Options
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left">1. Involvement of women and men in prokect conceptualization and design.</td>
                                <td><Options quiz_name="quiz" num="1"/></td>
                            </tr>
                            <tr>
                                <td class="text-left">2. Collection of sex-disaggregated data and gender-related information at the planning stage.</td>
                                <td> <Options quiz_name="quiz" num="2"/> </td>
                            </tr>
                            <tr>
                                <td class="text-left">3. Conduct of gender analysis and identification of gender issues at the project identification stage.</td>
                                <td>  <Options quiz_name="quiz" num="3"/> </td>
                            </tr>
                            <tr>
                                <td class="text-left">4. Presence of gender equality goals, outcomes, and outputs.</td>
                                <td>  <Options quiz_name="quiz" num="4"/> </td>
                            </tr>
                            <tr>
                                <td class="text-left">5. Presence of activities and interventions that match the gender issues identified to
                                produce gender equality outputs and outcomes.</td>
                                <td>  <Options quiz_name="quiz" num="5"/> </td>
                            </tr>
                            <tr>
                                <td class="text-left">6. Gender analysis of the likely impact of the designed project.</td>
                                <td>  <Options quiz_name="quiz" num="6"/> </td>
                            </tr>
                            <tr>
                                <td class="text-left">7. Presence of the monitoring targets and indicators.</td>
                                <td> <Options quiz_name="quiz" num="7"/> </td>
                            </tr>
                            <tr>
                                <td class="text-left">8. Provisions for the collection of sex-disaggregated data in the M & E Plan.</td>
                                <td>  <Options quiz_name="quiz" num="8"/> </td>
                            </tr>
                            <tr>
                                <td class="text-left">9. Commitment of resources to address gender issues.</td>
                                <td>  <Options quiz_name="quiz" num="9"/></td>
                            </tr>
                            <tr>
                                <td class="text-left">10. Inclusion of plans to coordinate/relate with the agency's GAD efforts.</td>
                                <td><Options quiz_name="quiz" num="10"/></td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-sheet>
            <div class="my-2 text-right">
                <v-btn outlined class="mx-2" @click="clear_form">Clear</v-btn>
                <v-btn outlined class="mx-2" @click="validate">Submit</v-btn>
            </div>
        </v-form>
        <v-dialog v-model="dialog" max-width="450" persistent>
            <v-card>
                <v-card-title class="headline" :style="{ 'color':result.color}">
                    {{result.headline}}
                </v-card-title>
                <v-card-text class="text-center">{{result.details}}</v-card-text>
                <v-card-actions class="text-center">
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                        Print
                    </v-btn>
                    <v-btn color="green darken-1" text @click="dialog = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Options from './radio_options'
export default {
    components:{
        Options
    },
    data:()=>({
        valid:true,
        dialog:false,
        result:{
            headline:'',
            details:''
        },
    }),
    methods:{
        clear_form:function(){
            this.$store.commit('reset_quiz');
        },
        validate:function(){
            this.dialog=this.$refs.form.validate();
            if (this.dialog){
                this.get_result()
            }
        },
        get_result:function(){
            let source = this.$store.state.quiz;
            let score = 0;
            for(const item in source){
                score = score + parseInt(source[item]);
            }
            switch(true){
                case score>=15:
                    console.log(`greater 15`)
                    this.result = {
                        headline:'Congratulations!',
                        color:'green',
                        details:'Proposed project is gender-responsive.'
                    }
                    break;
                case score>=8:
                    console.log(`greater 8`)
                    this.result = {
                        headline:'Congratulations!',
                        color:'green',
                        details:'Proposed project is gender-sensitive.'
                    }
                    break;
                case score>=4:
                    console.log(`greater 4`)
                   this.result = {
                        headline:'Congratulations!',
                        color:'green',
                        details:'Proposed project has promising GAD prospects (proposal earning a conditional pass) pending identification of gender issue/s and the strategies and activities to address these, and inclusion of the collection of the sex-disaggregated data in the monitoring and evaluation plan.'
                    }
                    break;
                case score>=0:
                    console.log(`greater 0`)
                    this.result = {
                        headline:'Non Compliant!',
                        color:'red',
                        details:'GAD is invisible to the project.(proposal to be returned)'
                    }
                    break;
            }
        }
    },
}
</script>
