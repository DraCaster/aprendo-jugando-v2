<template>
  <v-row>
    <Header title="AGRUPAR"/>
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
                    pathNextGame="/gamethree"
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
import Header from "../../../components/Header/Header"
import ButtonHome from "../../../components/ButtonHome/ButtonHome";
import Dialog from "../../../components/Dialog/Dialog";

//Images
import{
  auto,
    espejo,
    arania,
    escoba,
    anana,
    empanadas,
    elefante,
    aro,
    happyface,
    sadface
} from '../../../helpers/images.js'
import {gameTitleOne} from "../../../helpers/sounds";

export default {
  components: {
    ButtonHome,
    TableImages,
    Header,
    Dialog
  },
  data() {
    return {
      modalImg: null,
      modalTitle: null,
      result: true,
      gameTitlePath: gameTitleOne,
      activateModal: false,
      activateNextGame: false,
      items: [
        {
          title: 'auto',
          letter: 'a',
          url: auto,
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
          title: 'arania',
          letter: 'a',
          url: arania,
          selected: false,
          sound: ''
        },
        {
          title: 'escoba',
          letter: 'e',
          url: escoba,
          selected: false,
          sound: ''
        },
        {
          title: 'anana',
          letter: 'a',
          url: anana,
          selected: false,
          sound: ''
        },
        {
          title: 'empanada',
          letter: 'e',
          url: empanadas,
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
          title: 'aro',
          letter: 'a',
          url: aro,
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