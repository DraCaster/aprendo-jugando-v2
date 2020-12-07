<template>
  <v-row>
    <Header title="ARMAR PAREJAS"/>
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
import TableImages from '../../../components/TableImages/TableImages';
import Header from "../../../components/Header/Header";
import ButtonHome from "../../../components/ButtonHome/ButtonHome";

//Images
import{
  olla,
  ojota,
  oveja,
  unia,
  ola,
  uva,
  espejo,
  utiles,
  uniforme,
  arania
} from '../../../helpers/images.js'

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
            title: 'olla',
            letter: 'o',
            url: olla,
            selected: false,
            sound: ''
          },
          {
            title: 'ojotas',
            letter: 'o',
            url: ojota,
            selected: false,
            sound: ''
          },
          {
            title: 'oveja',
            letter: 'o',
            url: oveja,
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
            title: 'espejo',
            letter: 'e',
            url: espejo,
            selected: false,
            sound: ''
          },
          {
            title: 'utiles',
            letter: 'u',
            url: utiles,
            selected: false,
            sound: ''
          },
          {
            title: 'uniforme',
            letter: 'u',
            url: uniforme,
            selected: false,
            sound: ''
          },
          {
            title: 'arania',
            letter: 'a',
            url: arania,
            selected: false,
            sound: ''
          }
        ]
      }
    }
    
}
</script>