<template>
  <v-row>
    <Header title="¿EN QUE FILA VAN?"/>
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
                    pathNextGame="/gamenine"
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
  rueda,
  ropa,
  regalo,
  rana,
  raton,
  serpiente,
  sarten,
  sol,
  montania,
  murcielago,
  mochila,
  manzana,
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
            title: 'rueda',
            letter: 'r',
            url: rueda,
            selected: false,
            sound: ''
          },
          {
            title: 'ropa',
            letter: 'r',
            url: ropa,
            selected: false,
            sound: ''
          },
          {
            title: 'regalo',
            letter: 'r',
            url: regalo,
            selected: false,
            sound: ''
          },
          {
            title: 'rana',
            letter: 'r',
            url: rana,
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
            title: 'serpiente',
            letter: 's',
            url: serpiente,
            selected: false,
            sound: ''
          },
          {
            title: 'sarten',
            letter: 's',
            url: sarten,
            selected: false,
            sound: ''
          },
          {
            title: 'sol',
            letter: 's',
            url: sol,
            selected: false,
            sound: ''
          },
          {
            title: 'montania',
            letter: 'm',
            url: montania,
            selected: false,
            sound: ''
          },
          {
            title: 'murcielago',
            letter: 'm',
            url: murcielago,
            selected: false,
            sound: ''
          },
          {
            title: 'mochila',
            letter: 'm',
            url: mochila,
            selected: false,
            sound: ''
          },
          {
            title: 'manzana',
            letter: 'm',
            url: manzana,
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