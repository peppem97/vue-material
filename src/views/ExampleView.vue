<template>
  <v-container>
    <v-row justify="center">
      <h1>ESEMPIO</h1>
    </v-row>
    <br/>
    <v-row>
      <v-text-field
          v-model="testo"
          outline
      ></v-text-field>
    </v-row>
    <br/>
    <v-row>
      <h2>{{testo}}</h2>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "ExampleView",
  data() {
    return {
      testo: ''
    }
  }

}
</script>

<style scoped>

</style>