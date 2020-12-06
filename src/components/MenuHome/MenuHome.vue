<template>
  <v-container>
    <v-card
        max-width="400"
        class="mx-auto"
    >
      <v-container>
        <v-row dense>
          <v-col
              v-for="(item, i) in items"
              :key="i"
              cols="12"
          >
            <v-card
                :color="item.color"
                dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                      class="headline"
                      v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                        :to="item.path"
                    >
                      ENTRAR
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar
                    class="ma-3"
                    size="125"
                    tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>


        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import {playSound} from '../../helpers/gameFunctions'
import tina2 from '../../assets/tina2.png'
import paco1 from '../../assets/paco1.png'
export default {
  name: "MenuHome",
  data: () => ({
    items: [
      {
        color: '#8BC34A',
        src: tina2,
        title: 'JUEGOS',
        subtitle: 'NIVEL 1',
        path:'/activities'
      },
      {
        color: '#9575CD',
        src: paco1,
        title: 'ACERCA DE',
        subtitle: 'INFORMACION DE LA APLICACION',
        path:'/about'
      },
    ],
  }),
  methods:{
    play(){
      playSound('selec.wav')
    }
  }
};
</script>
<style>

.containerButton {
  width: 100px;
  margin: 0 auto 0;
  background-color: #4db6ac;
}

.pulse-button {
  position: relative;
  width: 100px;
  height: 100px;
  border: none;
  box-shadow: 0 0 0 0 rgba(86, 153, 146, 1.9);
  border-radius: 50%;
  background-color: #26a69a;
  background-size:cover;
  background-repeat: no-repeat;
  cursor: pointer;
  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}
.pulse-button:hover
{
  -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;
}

@-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(38, 166, 154, 0);}}
@-moz-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(38, 166, 154, 0);}}
@-ms-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(38, 166, 154, 0);}}
@keyframes pulse {to {box-shadow: 0 0 0 45px rgba(38, 166, 154, 0);}}
</style>
