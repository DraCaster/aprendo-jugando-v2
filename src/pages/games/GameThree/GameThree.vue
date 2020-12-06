<template>
  <v-row>
    <Header title="ARMAR PAREJAS"/>
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
import TableImages from '../../../components/TableImages/TableImages';
import olla from '../../../assets/cards/olla.png'
import ojotas from '../../../assets/cards/ojota.png'
import oveja from '../../../assets/cards/oveja.png'
import unia from '../../../assets/cards/unia.png'
import ola from '../../../assets/cards/ola.png'
import uva from '../../../assets/cards/uva.png'
import espejo from '../../../assets/cards/espejo.png'
import utiles from '../../../assets/cards/utiles.png'
import uniforme from '../../../assets/cards/uniforme.png'
import arania from '../../../assets/cards/arania.png'
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
            title: 'olla',
            letter: 'o',
            url: olla,
            sound: ''
          },
          {
            title: 'ojotas',
            letter: 'o',
            url: ojotas,
            sound: ''
          },
          {
            title: 'oveja',
            letter: 'o',
            url: oveja,
            sound: ''
          },
          {
            title: 'unia',
            letter: 'u',
            url: unia,
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
            title: 'espejo',
            letter: 'e',
            url: espejo,
            sound: ''
          },
          {
            title: 'utiles',
            letter: 'u',
            url: utiles,
            sound: ''
          },
          {
            title: 'uniforme',
            letter: 'u',
            url: uniforme,
            sound: ''
          },
          {
            title: 'arania',
            letter: 'a',
            url: arania,
            sound: ''
          }
        ]
      }
    }
    
}
</script>