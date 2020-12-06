<template>
  <v-row>
    <Header title="AGRUPAR"/>
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
import Header from "../../../components/Header/Header"

import auto from '../../../assets/cards/auto.png'
import espejo from '../../../assets/cards/espejo.png'
import arania from '../../../assets/cards/arania.png'
import escoba from '../../../assets/cards/escoba.png'
import anana from '../../../assets/cards/anana.png'
import empanada from '../../../assets/cards/empanadas.png'
import elefante from '../../../assets/cards/elefante.png'
import aro from '../../../assets/cards/aro.png'

export default {
  components:{
    TableImages,
    Header
  },
    data(){
      return {
        items: [
          {
            title: 'auto',
            letter: 'a',
            url: auto,
            sound: ''
          },
          {
            title: 'espejo',
            letter: 'e',
            url: espejo,
            sound: ''
          },
          {
            title: 'arania',
            letter: 'a',
            url: arania,
            sound: ''
          },
          {
            title: 'escoba',
            letter: 'e',
            url: escoba,
            sound: ''
          },
          {
            title: 'anana',
            letter: 'a',
            url: anana,
            sound: ''
          },
          {
            title: 'empanada',
            letter: 'e',
            url: empanada,
            sound: ''
          },
          {
            title: 'elefante',
            letter: 'e',
            url: elefante,
            sound: ''
          },
          {
            title: 'aro',
            letter: 'a',
            url: aro,
            sound: ''
          }
        ]
      }
    }
    
}
</script>