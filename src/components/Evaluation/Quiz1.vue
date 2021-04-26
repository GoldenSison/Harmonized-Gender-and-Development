<style>
    .bb_solid{
        margin: .2rem;
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        border-top: 1px solid black;
        border-radius: 5px;
    }
    v-sheet{
        color:black !important;
    }
</style>
<template>
    <v-sheet>
        <v-form>
            <h2 class="my-3">GAD Checklist for project Identification.</h2>
            <v-list dense>
                <v-list-item-group>
                    <v-list-item v-for="(item,k,i) in items" :key="i" class="bb_solid">
                        <question :settings="item" :vuex_num="item.number" quiz_name="quiz1"/>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <div class="d-flex justify-end">
                <v-btn class="ma-3" outlined>Clear</v-btn>
                <v-btn class="ma-3" outlined to="/Result">Submit</v-btn>
            </div>
        </v-form>
    </v-sheet>
</template>

<script>
import question from './questions/question'
export default {
    components:{
        question,
    },
    data:()=>({
        title:null,
        items:[
            {
                number:'1',
                text:`Involvement of women and men`,
                has_sub_item:true,
            },
            {   
                number:'1.1',
                text:`Participation of women and men in benificiary groups in problem identification`,
                has_sub_item:false,
            },
            {
                number:'1.2',
                text:`Participation of women and men in benificiary groups in project design`,
                has_sub_item:false,
            },
            {
                number:'2',
                text:`Collection of sex-disaggregated data and gender-related information`,
                has_sub_item:false,
            },
            {
                number:'3',
                text:`Conduct of gender analysis and identification of gender issues`,
                has_sub_item:true,
            },
            {
                number:'3.1',
                text:`Analysis of gender gaps and inequalities related to gender roles, perspectives and needs, or access to and control resources`,
                has_sub_item:false,
            },
            {
                number:'3.2',
                text:`Analysis of constraints and opportunities related to women and men's participation in the project`,
                has_sub_item:false,
            },
        ]
    }),
}
</script>