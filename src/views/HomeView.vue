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
          @click="goToAbout"
          color="primary"
          elevation="2"
      >VAI A ABOUT</v-btn>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
    goToAbout: function () {
      this.$router.push('/about/111')
    }
  }
}
</script>
