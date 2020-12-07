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
              @click="checkGame"
          >
            <v-icon dark>
              mdi-check
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <!-- Dialog Happy -->
    <v-dialog :value="activateModalHappy" width="500">
      <Dialog :dialog="activateModalHappy"
              :pathImg="happyfaceImg"
              v-on:closeDialog="closeDialog"/>
    </v-dialog>

    <!-- Dialog Sad -->
    <v-dialog :value="activateModalSad" width="500">
      <Dialog :dialog="activateModalSad"
              :pathImg="sadfaceImg"
              v-on:closeDialog="closeDialogSad"/>
    </v-dialog>

  </v-row>
</template>
<script>
import TableImages from '../../../components/TableImages/TableImages'
import Header from "../../../components/Header/Header";
import ButtonHome from "../../../components/ButtonHome/ButtonHome";
import Dialog from "../../../components/Dialog/Dialog";

//Images
import {
  espada,
  uno,
  oso,
  aro,
  ola,
  empanadas,
  ala,
  happyface,
  sadface
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
    Dialog,
    ButtonHome,
    TableImages,
    Header
  },
  data() {
    return {
      happyfaceImg: happyface,
      sadfaceImg: sadface,
      gameTitlePath: gameTitleOne,
      activateModalHappy: false,
      activateModalSad: false,
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
      this.activateModalHappy = true
    },
    closeDialog(){
      this.activateModalHappy = false
    },
    closeDialogSad(){
      this.activateModalSad = false
    }
  }
}
</script>