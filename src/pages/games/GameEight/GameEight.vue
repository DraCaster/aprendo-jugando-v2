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
  manzana
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
    }
}
</script>