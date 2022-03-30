<template>
  <v-container>
    <v-row justify="center">
      <nav>
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </v-row>
    <br/>
    <v-row>
      <router-view/>
    </v-row>
  </v-container>

</template>

<style lang="scss">
</style>
