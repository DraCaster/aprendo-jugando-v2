<template>
  <v-row>
    <Header title="ARMAR PAREJAS"/>
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
                    pathNextGame="/gamefour"
                    :activateNextGame="activateNextGame"
                    v-on:closeDialog="closeDialog"/>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

</template>
<script>
import TableImages from '../../../components/TableImages/TableImages';
import Header from "../../../components/Header/Header";
import ButtonHome from "../../../components/ButtonHome/ButtonHome";
import Dialog from "../../../components/Dialog/Dialog";

//Images
import {
  olla,
  ojota,
  oveja,
  unia,
  ola,
  uva,
  espejo,
  utiles,
  uniforme,
  arania,
  happyface,
  sadface
} from '../../../helpers/images.js'
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
            title: 'olla',
            letter: 'o',
            url: olla,
            selected: false,
            sound: ''
          },
          {
            title: 'ojotas',
            letter: 'o',
            url: ojota,
            selected: false,
            sound: ''
          },
          {
            title: 'oveja',
            letter: 'o',
            url: oveja,
            selected: false,
            sound: ''
          },
          {
            title: 'unia',
            letter: 'u',
            url: unia,
            selected: false,
            sound: ''
          },
          {
            title: 'ola',
            letter: 'o',
            url: ola,
            selected: false,
            sound: ''
          },
          {
            title: 'uva',
            letter: 'u',
            url: uva,
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
            title: 'utiles',
            letter: 'u',
            url: utiles,
            selected: false,
            sound: ''
          },
          {
            title: 'uniforme',
            letter: 'u',
            url: uniforme,
            selected: false,
            sound: ''
          },
          {
            title: 'arania',
            letter: 'a',
            url: arania,
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