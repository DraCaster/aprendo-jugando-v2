<template>
  <v-row>
    <Header title="NAIPES"/>
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
  anillo,
  aro,
  ojo,
  ola,
  uva,
  unia,
  arbol,
  ala,
  oso,
  oreja
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
            title: 'anillo',
            letter: 'a',
            url: anillo,
            selected: false,
            sound: ''
          },
          {
            title: 'aro',
            letter: 'a',
            url: aro,
            selected: false,
            sound: ''
          },
          {
            title: 'ojo',
            letter: 'o',
            url: ojo,
            selected: false,
            sound: ''
          },
          {
            title: 'ola',
            letter: 'o',
            url: ola,
            selected: false,
            sound: ''
          },
          {
            title: 'uva',
            letter: 'u',
            url: uva,
            selected: false,
            sound: ''
          },
          {
            title: 'unia',
            letter: 'u',
            url: unia,
            selected: false,
            sound: ''
          },
          {
            title: 'arbol',
            letter: 'a',
            url: arbol,
            selected: false,
            sound: ''
          },
          {
            title: 'ala',
            letter: 'a',
            url: ala,
            selected: false,
            sound: ''
          },
          {
            title: 'oso',
            letter: 'o',
            url: oso,
            selected: false,
            sound: ''
          },
          {
            title: 'oreja',
            letter: 'o',
            url: oreja,
            selected: false,
            sound: ''
          }
        ]
      }
    }
    
}
</script>