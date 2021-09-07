<template>
  <v-app>
    <v-app-bar flat app>
      <v-btn :ripple="false" plain to="/dashboard">Dashboard</v-btn>
      <v-btn :ripple="false" plain to="/about">About</v-btn>
      <v-btn :ripple="false" plain to="/404">404</v-btn>
    </v-app-bar>
    <v-main>
      <div class="text-h4 my-4">My personal costs</div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'fetchData'
    ])
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>

</style>
