<style scoped>
    p{
        text-align: justify;
    }
    .content{
        font-family: 'Times New Roman', Times, serif !important;
        color: black;
    }
    .title_position{
        font-size: 1rem !important;
    }  
    .transparent{
        background-color: transparent !important;
    }
</style>
<template>
    <v-sheet class="transparent content">
        <h2 class="mb-3">PREFACE</h2>
        <hr class="mb-3" />
        <!-- <v-img :src="img_cover" contain></v-img> -->
        <p>The Hannonized Gender and Development Guidelines (HGDG) for Project Development, Implementation, Monitoring
            and Evaluation was fonnulated by the National Economic and Development Authority (NEDA) in 2004 in
            collaboration with the Philippine Commission on Women (PCW, fonnerly the National Commission on the Role of
            Filipino Women or NCRFW) and the Official Development Assistance-Gender and Development (ODA-GAD) Network ,
            with funding support from the United Nations Development Programme (UNDP) and the Asian Development Bank
            (ADB).</p>

        <p>The HGDG was developed to provide a common instrument in integrating gender perspectives in development
            programs and projects among government agencies, donor organizations, and other stakeholders. It has been in
            use for more than a decade now and it has successfully facilitated gender mainstreaming efforts, including
            the recognition of the value of GAD checklists. From the eight (8) sectoral checklists developed in 2004, 20
            sectoral checklists are currently being used. Since 2013, a number of government agencies have provided
            resources and developed their own GAD checklists tailored to the needs of their sectors such as the
            Agriculture and Fisheries Checklist developed by the Bureau of Fisheries and Aquatic Resources (BFAR),
            Tourism Checklist developed by the Department of Tourism (DOT), and the GAD Checklist for the Energy Sector
            developed by the Department of Energy (DOE).</p>
        <p>The Guidelines have also been utilized in the formulation of the annual reports on gender responsiveness of
            ODA programs and projects since 2007. In 2009, the Guidelines were adopted for the assessment of gender
            responsiveness of programs and projects under the 17th ODA Portfolio Review. In 2014, a new dimension was
            introduced in the annual reporting through the conduct of monitoring visits to selected projects. The
            Guidelines were used to validate the gender results achieved by the projects and identify best practices
            which can be adopted by other projects, especially those classified with promising GAD prospects.</p>
        <p>To sustain the gains and to ensure that plans and budgets are also gender responsive, a Development Planning
            Checklist was developed in 2014 with funding support from AECID, through the PCW-AECID Project
            "Institutional Strengthening of National and Local Governance on Human Rights and Economic Empowerment with
            a Gender Focus: Implementation of the Magna Carta of Women." This Checklist aims to guide development
            planners in mainstreaming gender in the major phases of the development planning cycle. A major milestone is
            NEDA's issuance of Office Order No. 04-2015 on 17 June 2015 directing all concerned NEDA employees to use
            the Development Planning Checklist in the formulation of the Philippine Development Plan (PDP),
            Socioeconomic Report (SER), Public Investment Program (PIP), Regional Development Plans (RDPs), and other
            relevant policy instruments.</p>
        <p>We have made significant gains in our advocacy on the use of the HGDG as demonstrated by the growing
            interests in developing more sectoral checklists and in the increasing demand for capacity building. We call
            for the continuous support of all the government agencies and our development partners in the utilization
            and promotion of the Guidelines with the goal of fulfilling women's human rights and achieving gender
            equality and development for all.</p>
            <v-row>
                <v-col class="d-flex flex-column">
                    <strong>EMMANUEL F. ESGUERRA </strong>
                    <span class="title_position">Secretary of Socioeconomic Planning and NEDA Director-General</span>
                </v-col>
                <v-col class="d-flex flex-column">
                    <strong>REMEDIOS IGNACIO-RIKKEN</strong>
                    <span class="title_position">Chairperson Philippine Commission on Women</span>
                </v-col>
            </v-row>
    </v-sheet>
</template>

<script>
import cover_img from '../../assets/cover.jpg'
export default {
    data:()=>({
        img_cover:cover_img,
    }),
}
</script>

<style>

</style>