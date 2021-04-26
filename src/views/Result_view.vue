<style scoped>
  th{
    text-align: center !important;
  }
</style>
<template>
    <v-row class="d-flex justify-center mt-5">
        <v-col cols="8">
            <v-sheet>
                <v-card>
                    <v-card-text class="green--text">
                        Congratulations your Project has Promising GAD Prospects!
                    </v-card-text>
                </v-card>
            </v-sheet>
            <v-sheet>
                <h4 class="my-5">GAD Checklist for Project Identification.</h4>
                <v-sheet outlined>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Question</th>
                                    <th>Answer</th>
                                    <th>Score</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-left">Question</td>
                                    <td>Answer</td>
                                    <td>Score</td>
                                    <td>SAmple Comments</td>
                                </tr>
                                <tr>
                                    <td class="text-left">Question</td>
                                    <td>Answer</td>
                                    <td>Score</td>
                                    <td>SAmple Comments</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                    <div class="d-flex justify-end">
                        <v-btn class="ma-3" outlined to="evaluation" plain>Retake the test</v-btn>
                        <v-btn class="ma-3" outlined to="/Result" plain>print</v-btn>
                    </div>
                </v-sheet>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>