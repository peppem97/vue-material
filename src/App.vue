<template>
  <div class="container">
    <div class="row justify-content-center">
      <nav>
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </div>
    <br/>
    <div class="row justify-content-center">
      <router-view/>
    </div>
  </div>

</template>

<style lang="scss">
</style>
