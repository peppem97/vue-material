<template>
  <v-container>
    <v-row justify="center">
      <h1>Questa è ABOUT</h1>
      <h2>{{ this.$route.params.id }} </h2>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'AboutView',
}
</script>