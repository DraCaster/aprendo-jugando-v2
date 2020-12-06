<template>
  <v-row>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="400">
        <v-card-title class="justify-center">EL TREN</v-card-title>
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
import espada from '../../../assets/cards/espada.png'
import espejo from '../../../assets/cards/espejo.png'
import escuela from '../../../assets/cards/escuela.png'
import elefante from '../../../assets/cards/elefante.png'
import iman from '../../../assets/cards/iman.png'
import iglesia from '../../../assets/cards/iglesia.png'
import isla from '../../../assets/cards/isla.png'
import estrella from '../../../assets/cards/estrella.png'
import incendio from '../../../assets/cards/incendio.png'
import anteojos from '../../../assets/cards/anteojos.png'
import uno from '../../../assets/cards/uno.png'
import indio from '../../../assets/cards/indio.png'

export default {
  components:{
    TableImages
  },
    data(){
      return {
        items: [
          {
            title: 'espada',
            letter: 'e',
            url: espada,
            sound: ''
          },
          {
            title: 'espejo',
            letter: 'e',
            url: espejo,
            sound: ''
          },
          {
            title: 'escuela',
            letter: 'e',
            url: escuela,
            sound: ''
          },
          {
            title: 'elefante',
            letter: 'e',
            url: elefante,
            sound: ''
          },
          {
            title: 'iman',
            letter: 'i',
            url: iman,
            sound: ''
          },
          {
            title: 'iglesia',
            letter: 'i',
            url: iglesia,
            sound: ''
          },
          {
            title: 'isla',
            letter: 'i',
            url: isla,
            sound: ''
          },
          {
            title: 'estrella',
            letter: 'e',
            url: estrella,
            sound: ''
          },
          {
            title: 'incendio',
            letter: 'i',
            url: incendio,
            sound: ''
          },
          {
            title: 'anteojos',
            letter: 'a',
            url: anteojos,
            sound: ''
          },
          {
            title: 'uno',
            letter: 'u',
            url: uno,
            sound: ''
          },
          {
            title: 'indio',
            letter: 'i',
            url: indio,
            sound: ''
          }
        ]
      }
    }

}
</script>