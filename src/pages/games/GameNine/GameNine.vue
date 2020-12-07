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
                    pathNextGame="/gameten"
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
  mago,
  nido,
  nena,
  moto,
  nube,
  moneda,
  raton,
  suma,
  nudo,
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
            title: 'mago',
            letter: 'm',
            url: mago,
            selected: false,
            sound: ''
          },
          {
            title: 'nido',
            letter: 'n',
            url: nido,
            selected: false,
            sound: ''
          },
          {
            title: 'nena',
            letter: 'n',
            url: nena,
            selected: false,
            sound: ''
          },
          {
            title: 'moto',
            letter: 'm',
            url: moto,
            selected: false,
            sound: ''
          },
          {
            title: 'nube',
            letter: 'n',
            url: nube,
            selected: false,
            sound: ''
          },
          {
            title: 'moneda',
            letter: 'm',
            url: moneda,
            selected: false,
            sound: ''
          },
          {
            title: 'raton',
            letter: 'r',
            url: raton,
            selected: false,
            sound: ''
          },
          {
            title: 'suma',
            letter: 's',
            url: suma,
            selected: false,
            sound: ''
          },
          {
            title: 'nudo',
            letter: 'n',
            url: nudo,
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