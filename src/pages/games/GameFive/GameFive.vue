<template>
  <v-row>
    <Header title="EL TREN"/>
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
                    pathNextGame="/gamesix"
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
  espejo,
  escuela,
  elefante,
  iman,
  iglesia,
  isla,
  estrella,
  incendio,
  anteojos,
  uno,
  indio,
  happyface,
  sadface
} from '../../../helpers/images'
import {gameTitleOne} from "../../../helpers/sounds";

export default {
  components:{
    ButtonHome,
    Header,
    TableImages,
    Dialog
  },
    data(){
      return {
        modalImg: null,
        modalTitle: null,
        result: true,
        gameTitlePath: gameTitleOne,
        activateModal: false,
        activateNextGame: false,
        items: [
          {
            title: 'espada',
            letter: 'e',
            url: espada,
            selected: false,
            sound: ''
          },
          {
            title: 'espejo',
            letter: 'e',
            url: espejo,
            selected: false,
            sound: ''
          },
          {
            title: 'escuela',
            letter: 'e',
            url: escuela,
            selected: false,
            sound: ''
          },
          {
            title: 'elefante',
            letter: 'e',
            url: elefante,
            selected: false,
            sound: ''
          },
          {
            title: 'iman',
            letter: 'i',
            url: iman,
            selected: false,
            sound: ''
          },
          {
            title: 'iglesia',
            letter: 'i',
            url: iglesia,
            selected: false,
            sound: ''
          },
          {
            title: 'isla',
            letter: 'i',
            url: isla,
            selected: false,
            sound: ''
          },
          {
            title: 'estrella',
            letter: 'e',
            url: estrella,
            selected: false,
            sound: ''
          },
          {
            title: 'incendio',
            letter: 'i',
            url: incendio,
            selected: false,
            sound: ''
          },
          {
            title: 'anteojos',
            letter: 'a',
            url: anteojos,
            selected: false,
            sound: ''
          },
          {
            title: 'uno',
            letter: 'u',
            url: uno,
            selected: false,
            sound: ''
          },
          {
            title: 'indio',
            letter: 'i',
            url: indio,
            selected: false,
            sound: ''
          }
        ]
      }
    },
  methods: {
    checkGame() {
      this.result = this.items.find(item => item.selected === true)

      console.log('items: ', this.items)
      if (this.result) {
        this.modalImg = happyface
        this.modalTitle = "¡MUY BIEN!"
        this.activateNextGame = true
      } else {
        this.modalImg = sadface
        this.modalTitle = "UPS! TE EQUIVOCASTE!"
        this.activateNextGame = false
      }
      this.activateModal = true
    },
    closeDialog() {
      this.activateModal = false
    },
  }
}
</script>