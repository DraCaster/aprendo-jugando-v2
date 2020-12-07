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
  espada,
  espejo,
  escuela,
  elefante,
  iman,
  iglesia,
  isla,
  estrella,
  incendio,
  anteojos,
  uno,
  indio
} from '../../../helpers/images'

export default {
  components:{
    ButtonHome,
    Header,
    TableImages
  },
    data(){
      return {
        items: [
          {
            title: 'espada',
            letter: 'e',
            url: espada,
            selected: false,
            sound: ''
          },
          {
            title: 'espejo',
            letter: 'e',
            url: espejo,
            selected: false,
            sound: ''
          },
          {
            title: 'escuela',
            letter: 'e',
            url: escuela,
            selected: false,
            sound: ''
          },
          {
            title: 'elefante',
            letter: 'e',
            url: elefante,
            selected: false,
            sound: ''
          },
          {
            title: 'iman',
            letter: 'i',
            url: iman,
            selected: false,
            sound: ''
          },
          {
            title: 'iglesia',
            letter: 'i',
            url: iglesia,
            selected: false,
            sound: ''
          },
          {
            title: 'isla',
            letter: 'i',
            url: isla,
            selected: false,
            sound: ''
          },
          {
            title: 'estrella',
            letter: 'e',
            url: estrella,
            selected: false,
            sound: ''
          },
          {
            title: 'incendio',
            letter: 'i',
            url: incendio,
            selected: false,
            sound: ''
          },
          {
            title: 'anteojos',
            letter: 'a',
            url: anteojos,
            selected: false,
            sound: ''
          },
          {
            title: 'uno',
            letter: 'u',
            url: uno,
            selected: false,
            sound: ''
          },
          {
            title: 'indio',
            letter: 'i',
            url: indio,
            selected: false,
            sound: ''
          }
        ]
      }
    }

}
</script>