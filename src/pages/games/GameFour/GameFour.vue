<template>
  <v-row>
    <Header title="NAIPES"/>
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
import anillo from '../../../assets/cards/anillo.png'
import aro from '../../../assets/cards/aro.png'
import ojo from '../../../assets/cards/ojo.png'
import ola from '../../../assets/cards/ola.png'
import uva from '../../../assets/cards/uva.png'
import unia from '../../../assets/cards/unia.png'
import arbol from '../../../assets/cards/arbol.png'
import ala from '../../../assets/cards/ala.png'
import oso from '../../../assets/cards/oso.png'
import oreja from '../../../assets/cards/oreja.png'
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
            title: 'anillo',
            letter: 'a',
            url: anillo,
            sound: ''
          },
          {
            title: 'aro',
            letter: 'a',
            url: aro,
            sound: ''
          },
          {
            title: 'ojo',
            letter: 'o',
            url: ojo,
            sound: ''
          },
          {
            title: 'ola',
            letter: 'o',
            url: ola,
            sound: ''
          },
          {
            title: 'uva',
            letter: 'u',
            url: uva,
            sound: ''
          },
          {
            title: 'unia',
            letter: 'u',
            url: unia,
            sound: ''
          },
          {
            title: 'arbol',
            letter: 'a',
            url: arbol,
            sound: ''
          },
          {
            title: 'ala',
            letter: 'a',
            url: ala,
            sound: ''
          },
          {
            title: 'oso',
            letter: 'o',
            url: oso,
            sound: ''
          },
          {
            title: 'oreja',
            letter: 'o',
            url: oreja,
            sound: ''
          }
        ]
      }
    }
    
}
</script>