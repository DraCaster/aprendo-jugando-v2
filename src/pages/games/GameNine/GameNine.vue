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
  mago,
  nido,
  nena,
  moto,
  nube,
  moneda,
  raton,
  suma,
  nudo
} from '../../../helpers/images'

export default {
  components:{
    ButtonHome,
    Header,
    TableImages
  },
    data() {
      return {
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
    }
}
</script>