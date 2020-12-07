<template>
  <v-row>
    <Header title="¿QUE VOY A DECIR?" :sound-title="gameTitlePath"/>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="500">
          <TableImages :items="items"/>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card
        class="mx-auto"
        max-width="173">
        <v-card-actions>
          <v-btn
              class="mx-2"
              fab
              dark
              large
              color="cyan"
              to="/"
          >
            <v-icon dark>
              mdi-home
            </v-icon>
          </v-btn>
          <v-btn
              class="mx-2"
              fab
              dark
              large
              color="green"
          >
            <v-icon dark>
              mdi-check
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

</template>
<script>
import TableImages from '../../../components/TableImages/TableImages'
import Header from "../../../components/Header/Header";
//Images
import espada from '../../../assets/cards/espada.png'
import uno from '../../../assets/cards/uno.png'
import oso from '../../../assets/cards/oso.png'
import aro from '../../../assets/cards/aro.png'
import ola from '../../../assets/cards/ola.png'
import empanadas from '../../../assets/cards/empanadas.png'
import ala from '../../../assets/cards/ala.png'

//Sounds
import espadaSound from '../../../assets/sounds/words/espada.wav'
import unoSound from  '../../../assets/sounds/words/uno.wav'
import osoSound from '../../../assets/sounds/words/oso.wav'
import aroSound from '../../../assets/sounds/words/aro.wav'
import olaSound from '../../../assets/sounds/words/ola.wav'
import empanadasSound from '../../../assets/sounds/words/empanada.wav'
import alaSound from '../../../assets/sounds/words/ala.wav'
import gameTitle from '../../../assets/sounds/gameTitles/game-one.wav'
export default {
 components:{
   TableImages,
   Header
 },
  data() {
    return {
      gameTitlePath: gameTitle,
      items: [
        {
          id:0,
          title: 'espada',
          letter: 'e',
          url: espada,
          selected: false,
          sound: espadaSound
        },
        {
          id:1,
          title: 'uno',
          letter: 'u',
          url: uno,
          selected: false,
          sound: unoSound
        },
        {
          id:2,
          title: 'oso',
          letter: 'o',
          url: oso,
          selected: false,
          sound: osoSound
        },
        {
          id:3,
          title: 'aro',
          letter: 'a',
          url: aro,
          selected: false,
          sound: aroSound
        },
        {
          id:4,
          title: 'ola',
          letter: 'o',
          url: ola,
          selected: false,
          sound: olaSound
        },
        {
          id:5,
          title: 'empanadas',
          letter: 'e',
          url: empanadas,
          selected: false,
          sound: empanadasSound
        },
        {
          id:6,
          title: 'ala',
          letter: 'a',
          url: ala,
          selected: false,
          sound: alaSound
        }]
    }}
}
</script>