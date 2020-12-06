<template>
  <v-row>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="400">
        <v-card-title class="justify-center">EL PUEBLO MANDA</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="500">
          <TableImages :items="items"/>
      </v-card>
    </v-col>
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
import mano from '../../../assets/cards/mano.png'
import martillo from '../../../assets/cards/martillo.png'
import venda from '../../../assets/cards/venda.png'
import tambor from '../../../assets/cards/tambor.png'
import mago from '../../../assets/cards/mago.png'
import manzana from '../../../assets/cards/manzana.png'
import mesa from '../../../assets/cards/mesa.png'
import nariz from '../../../assets/cards/nariz.png'
import reloj from '../../../assets/cards/reloj.png'
import volcan from '../../../assets/cards/volcan.png'
import mono from '../../../assets/cards/mono.png'

export default {
  components:{
    TableImages
  },
    data() {
      return {
        items: [
          {
            title: 'mano',
            letter: 'm',
            url: mano,
            sound: ''
          },
          {
            title: 'martillo',
            letter: 'm',
            url: martillo,
            sound: ''
          },
          {
            title: 'venda',
            letter: 'v',
            url: venda,
            sound: ''
          },
          {
            title: 'tambor',
            letter: 't',
            url: tambor,
            sound: ''
          },
          {
            title: 'mago',
            letter: 'm',
            url: mago,
            sound: ''
          },
          {
            title: 'manzana',
            letter: 'm',
            url: manzana,
            sound: ''
          },
          {
            title: 'mesa',
            letter: 'm',
            url: mesa,
            sound: ''
          },
          {
            title: 'nariz',
            letter: 'n',
            url: nariz,
            sound: ''
          },
          {
            title: 'reloj',
            letter: 'r',
            url: reloj,
            sound: ''
          },
          {
            title: 'volcan',
            letter: 'v',
            url: volcan,
            sound: ''
          },
          {
            title: 'mono',
            letter: 'm',
            url: mono,
            sound: ''
          }
        ]
      }
    }
    
}
</script>