<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card :color="color">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title :color="colorTitle" v-text="title"></v-card-title>
              <v-card-action>
                <v-btn 
                @click="playSound"
                to="/activities" color="#00BFA5" rounded elevation="11" large x-large dark class="ml-2 mt-5" 
                  >ENTRAR
                  <v-icon right dark>
                    mdi-redo
                  </v-icon>
                </v-btn>

              </v-card-action>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img src="../assets/img/tina2.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
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
