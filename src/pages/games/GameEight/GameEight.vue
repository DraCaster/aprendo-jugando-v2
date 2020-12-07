<template>
  <v-row>
    <Header title="¿EN QUE FILA VAN?"/>
    <TableImages :items="items"/>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="173">
        <v-card-actions>
          <v-btn
              class="mx-2"
              fab
              dark
              large
              color="cyan"
              to="/"
          >
            <v-icon dark>
              mdi-home
            </v-icon>
          </v-btn>
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
import rueda from '../../../assets/cards/rueda.png'
import ropa from '../../../assets/cards/ropa.png'
import regalo from '../../../assets/cards/regalo.png'
import rana from '../../../assets/cards/rana.png'
import raton from '../../../assets/cards/raton.png'
import serpiente from '../../../assets/cards/serpiente.png'
import sarten from '../../../assets/cards/sarten.png'
import sol from '../../../assets/cards/sol.png'
import montania from '../../../assets/cards/montania.png'
import murcielago from '../../../assets/cards/murcielago.png'
import mochila from '../../../assets/cards/mochila.png'
import manzana from '../../../assets/cards/manzana.png'
import Header from "../../../components/Header/Header";

export default {
  components:{
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
            sound: ''
          },
          {
            title: 'ropa',
            letter: 'r',
            url: ropa,
            sound: ''
          },
          {
            title: 'regalo',
            letter: 'r',
            url: regalo,
            sound: ''
          },
          {
            title: 'rana',
            letter: 'r',
            url: rana,
            sound: ''
          },
          {
            title: 'raton',
            letter: 'r',
            url: raton,
            sound: ''
          },
          {
            title: 'serpiente',
            letter: 's',
            url: serpiente,
            sound: ''
          },
          {
            title: 'sarten',
            letter: 's',
            url: sarten,
            sound: ''
          },
          {
            title: 'sol',
            letter: 's',
            url: sol,
            sound: ''
          },
          {
            title: 'montania',
            letter: 'm',
            url: montania,
            sound: ''
          },
          {
            title: 'murcielago',
            letter: 'm',
            url: murcielago,
            sound: ''
          },
          {
            title: 'mochila',
            letter: 'm',
            url: mochila,
            sound: ''
          },
          {
            title: 'manzana',
            letter: 'm',
            url: manzana,
            sound: ''
          }
        ]
      }
    }
}
</script>