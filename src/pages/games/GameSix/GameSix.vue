<template>
  <v-row>
    <Header title="EL PUEBLO MANDA"/>
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
                    pathNextGame="/gameseven"
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
  mano,
  martillo,
  venda,
  tambor,
  mago,
  manzana,
  mesa,
  nariz,
  reloj,
  volcan,
  mono,
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
            title: 'mano',
            letter: 'm',
            url: mano,
            selected: false,
            sound: ''
          },
          {
            title: 'martillo',
            letter: 'm',
            url: martillo,
            selected: false,
            sound: ''
          },
          {
            title: 'venda',
            letter: 'v',
            url: venda,
            selected: false,
            sound: ''
          },
          {
            title: 'tambor',
            letter: 't',
            url: tambor,
            selected: false,
            sound: ''
          },
          {
            title: 'mago',
            letter: 'm',
            url: mago,
            selected: false,
            sound: ''
          },
          {
            title: 'manzana',
            letter: 'm',
            url: manzana,
            selected: false,
            sound: ''
          },
          {
            title: 'mesa',
            letter: 'm',
            url: mesa,
            selected: false,
            sound: ''
          },
          {
            title: 'nariz',
            letter: 'n',
            url: nariz,
            selected: false,
            sound: ''
          },
          {
            title: 'reloj',
            letter: 'r',
            url: reloj,
            selected: false,
            sound: ''
          },
          {
            title: 'volcan',
            letter: 'v',
            url: volcan,
            selected: false,
            sound: ''
          },
          {
            title: 'mono',
            letter: 'm',
            url: mono,
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