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
        href="https://github.com/dracaster/"
        target="_blank"
        text
      >
        <span class="mr-2">ACERCA DE</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Menu/>
    </v-main>
  </v-app>
</template>
<script>
import Menu from './pages/Menu';

export default {
  name: 'App',
  components: {
    Menu,
  },
};
</script>
