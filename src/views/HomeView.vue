<template>
  <v-container>
    <v-row justify="center">
      <h1>Questa è la HOME</h1>
    </v-row>
    <br/>
    <v-row justify="center">
      <h1>Hello, my name is {{$store.state.user.name}}</h1>
    </v-row>
    <br/>
    <v-row justify="center">
      <p>{{$store.getters.postsCount}} posts available</p>
    </v-row>
    <br/>
    <v-row justify="center">
      <v-btn
      color="primary"
      elevation="2"
      rounded
      @click="goToAbout"
      >PREMI</v-btn>
    </v-row>
    <br/>
    <br/>
    <v-row justify="center">
      <v-btn
          color="primary"
          elevation="2"
          rounded
          @click="goToExample"
      >VAI A ESEMPIO</v-btn>
    </v-row>
    <br/>
    <br/>
    <br/>
    <v-row justify="center">
      <v-text-field
          label="Outlined"
          placeholder="Placeholder"
          clearable
          variant="outlined"
      ></v-text-field>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
    goToAbout: function () {
      this.$router.push('/about/111')
    },
    goToExample: function () {
      this.$router.push('/example')
    }
  }
}
</script>
