<template>
  <v-row>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="400">
        <v-card-title class="justify-center">ACERCA DE LA APLICACION</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="400">
        <v-card-title>Aprendo Jugando 2020</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="100">
        <v-card-actions>
          <ButtonHome/>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

</template>
<script>
import ButtonHome from "../../components/ButtonHome/ButtonHome";
export default {
    name:"About",
  components: {ButtonHome}
}
</script>