<template>
  <v-app>
    <v-app-bar
      app
      color="#ee6e73"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <h3>APRENDO JUGANDO</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/DraCaster/aprendo-jugando-v2"
        target="_blank"
        text
      >
        <span class="mr-2">ACERCA DE</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="wallpaper">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
};
</script>
<style>
.wallpaper{
  background-image: url('./assets/wallpaper.jpeg');
  background-repeat: repeat-x;
}
</style>

