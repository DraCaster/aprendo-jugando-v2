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
                    pathNextGame="/gameeight"
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
  rana,
  media,
  sifon,
  sillon,
  munieca,
  suma,
  rueda,
  lata,
  happyface,
  sadface
} from '../../../helpers/images'
import {gameTitleOne} from "../../../helpers/sounds";

export default {
  components:{
    ButtonHome,
    TableImages,
    Header,
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
            title: 'rana',
            letter: 'r',
            url: rana,
            selected: false,
            sound: ''
          },
          {
            title: 'media',
            letter: 'm',
            url: media,
            selected: false,
            sound: ''
          },
          {
            title: 'sifon',
            letter: 's',
            url: sifon,
            selected: false,
            sound: ''
          },
          {
            title: 'sillon',
            letter: 's',
            url: sillon,
            selected: false,
            sound: ''
          },
          {
            title: 'munieca',
            letter: 'm',
            url: munieca,
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
            title: 'rueda',
            letter: 'r',
            url: rueda,
            selected: false,
            sound: ''
          },
          {
            title: 'lata',
            letter: 'l',
            url: lata,
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