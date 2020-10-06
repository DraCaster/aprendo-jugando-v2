<template>
  <v-app>
    <v-app-bar
      app
      color="#e57373"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="App Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo2.png"
          transition="scale-transition"
          width="50"
        />

        <h3>Aprendo Jugando </h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/dracaster"
        target="_blank"
        text
      >
        <span class="mr-2">Acerca de</span>
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
  name: 'App',

  components: {
   
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.wallpaper{
  background-image: URL('./assets/wallpaper.jpeg');
  background-repeat: repeat-x;
}
</style>
