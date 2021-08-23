<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="teal"
      dark
    >
    
      <v-btn
       to="/dashboard"
       plain
       :ripple="false"
      >
        Dashboard
      </v-btn>
      <v-btn
       to="/about"
       plain
       :ripple="false"
      >
        About
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>