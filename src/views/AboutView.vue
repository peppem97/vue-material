<template>
  <v-container>
    <v-row justify="center">
      <h1>Questa è ABOUT</h1>
      <h2>{{ this.$route.params.id }} </h2>
    </v-row>
    <br/>
    <v-row justify="center">
      <input type="text" v-model="post" />
      <button @click="savePost">Save</button>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'AboutView',
  methods:{
    savePost(){
      this.$store.dispatch('insertPost', this.post)
    }
  }
}
</script>