<style scoped>
  .small_label >>> label{
    font-size: .6rem !important;
  }
  .small_radio >>> input {
    height: .6rem !important;
    width: .6rem !important;
  }
  th{
    text-align: center !important;
  }
</style>

<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>Question</th>
          <th>Options</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.question }}</td>
          <td class="d-flex justify-center align-center">
             <v-radio-group row class="small_label">
              <v-radio v-for="n in 3" :label='`Radio ${n}`' :key="n"/>
            </v-radio-group>
          </td>
          <td>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        items:[
          {
            id:'1',
            question:"Involvement of women and men.",
            answer:1,
          },
          {
            id:'1.1',
            question:"Participation of women and men in beneficiary groups in problem identification.",
            answer:1,
          },
          {
            id:'1.2',
            question:"Participation of women and men in beneficiary groups in project design.",
            answer:1,
          },
        ]
     }
    },
  }
</script>
<style>

</style>