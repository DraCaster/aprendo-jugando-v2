<template>
  <v-row>
    <Header title="¿QUE VOY A DECIR?" :sound-title="gameTitlePath"/>
    <TableImages :items="items"/>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="173">
        <v-card-actions>
          <ButtonHome/>
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
import ButtonHome from "../../../components/ButtonHome/ButtonHome";

//Images
import {
  espada,
  uno,
  oso,
  aro,
  ola,
  empanadas,
  ala
} from '../../../helpers/images'

//Sounds
import{
  espadaSound,
  unoSound,
  osoSound,
  aroSound,
  olaSound,
  empanadasSound,
  alaSound,
  gameTitleOne
} from '../../../helpers/sounds'

export default {
  components: {
    ButtonHome,
    TableImages,
    Header
  },
  data() {
    return {
      gameTitlePath: gameTitleOne,
      items: [
        {
          id: 0,
          title: 'espada',
          letter: 'e',
          url: espada,
          selected: false,
          sound: espadaSound
        },
        {
          id: 1,
          title: 'uno',
          letter: 'u',
          url: uno,
          selected: false,
          sound: unoSound
        },
        {
          id: 2,
          title: 'oso',
          letter: 'o',
          url: oso,
          selected: false,
          sound: osoSound
        },
        {
          id: 3,
          title: 'aro',
          letter: 'a',
          url: aro,
          selected: false,
          sound: aroSound
        },
        {
          id: 4,
          title: 'ola',
          letter: 'o',
          url: ola,
          selected: false,
          sound: olaSound
        },
        {
          id: 5,
          title: 'empanadas',
          letter: 'e',
          url: empanadas,
          selected: false,
          sound: empanadasSound
        },
        {
          id: 6,
          title: 'ala',
          letter: 'a',
          url: ala,
          selected: false,
          sound: alaSound
        }]
    }
  },
  methods:{
    checkGame(){
      console.log('lala')
    }
  }
}
</script>