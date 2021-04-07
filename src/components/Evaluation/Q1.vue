<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th >
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.question }}</td>
          <td>{{ item.answer }}</td>
          <td>
            <v-radio-group row dense >
              <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></v-radio>
            </v-radio-group>
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
            answer:null,
          },
          {
            id:'1.1',
            question:"Participation of women and men in beneficiary groups in problem identification.",
            answer:null,
          },
          {
            id:'1.2',
            question:"Participation of women and men in beneficiary groups in project design.",
            answer:null,
          },
        ]
     }
    },
  }
</script>
<style>

</style>