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

          <v-dialog :value="activateModal" max-width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  class="mx-2"
                  fab
                  dark
                  v-bind="attrs"
                  v-on="on"
                  large
                  color="green"
                  @click="checkGame"
              >
                <v-icon dark>
                  mdi-check
                </v-icon>
              </v-btn>
            </template>
            <Dialog :dialog="activateModal"
                    :pathImg="modalImg"
                    :title="modalTitle"
                    pathNextGame="/gameoneparttwo"
                    :activateNextGame="activateNextGame"
                    v-on:closeDialog="closeDialog"/>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
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
import {
  espadaSound,
  unoSound,
  osoSound,
  aroSound,
  olaSound,
  empanadasSound,
  alaSound,
  gameTitleOne, ganaste, error
} from '../../../helpers/sounds'

export default {
  components: {
    Dialog,
    ButtonHome,
    TableImages,
    Header
  },
  mounted() {
    this.generateSounds()
  },
  data() {
    return {
      modalImg: null,
      modalTitle: null,
      result: true,
      soundOk: null,
      soundError:null,
      activateNextGame: false,
      gameTitlePath: gameTitleOne,
      activateModal: false,
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
  methods: {
    checkGame() {
      this.result = this.items.find(item => item.selected === true)
      console.log('result: ',this.result)
      if (this.result && this.result.letter === 'u') {
        this.modalImg = happyface
        this.modalTitle = "¡MUY BIEN!"
        this.activateNextGame = true
        this.soundOk.play()
      } else {
        this.modalImg = sadface
        this.modalTitle = "UPS! TE EQUIVOCASTE!"
        this.activateNextGame = false
        this.soundError.play()
      }
      this.activateModal = true
    },
    closeDialog() {
      this.activateModal = false
    },
    generateSounds(){
        this.soundOk = new Audio(ganaste)
        this.soundError = new Audio(error)
    }
  }
}
</script>