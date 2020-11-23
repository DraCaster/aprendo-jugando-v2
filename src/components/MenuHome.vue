<template>
  <v-container>
    <v-card
        max-width="400"
        class="mx-auto"
    >
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card
                color="#4db6ac"
                dark
            >
              <v-card-title class="headline">
               JUEGOS Y ACTIVIDADES
              </v-card-title>

              <v-card-subtitle>NIVEL 1</v-card-subtitle>

              <v-card-actions>
                <v-btn text>
                  JUGAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import {playSound} from '../helpers/gameFunctions'
export default {
  name: "MenuHome",
  data: () => ({
    colorTitle: "#9C27B0",
    color: "#FCE4EC",
    title: "JUEGOS Y ACTIVIDADES",
  }),
  methods:{
    play(){
      playSound('selec.wav')
    }
  }
};
</script>
