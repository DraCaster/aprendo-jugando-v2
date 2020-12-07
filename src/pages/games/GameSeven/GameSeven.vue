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
import TableImages from '../../../components/TableImages/TableImages'
import Header from "../../../components/Header/Header";
import ButtonHome from "../../../components/ButtonHome/ButtonHome";

//Images
import {
  rana,
  media,
  sifon,
  sillon,
  munieca,
  suma,
  rueda,
  lata
} from '../../../helpers/images'

export default {
  components:{
    ButtonHome,
    TableImages,
    Header
  },
    data(){
      return {
        items: [
          {
            title: 'rana',
            letter: 'r',
            url: rana,
            selected: false,
            sound: ''
          },
          {
            title: 'media',
            letter: 'm',
            url: media,
            selected: false,
            sound: ''
          },
          {
            title: 'sifon',
            letter: 's',
            url: sifon,
            selected: false,
            sound: ''
          },
          {
            title: 'sillon',
            letter: 's',
            url: sillon,
            selected: false,
            sound: ''
          },
          {
            title: 'munieca',
            letter: 'm',
            url: munieca,
            selected: false,
            sound: ''
          },
          {
            title: 'suma',
            letter: 's',
            url: suma,
            selected: false,
            sound: ''
          },
          {
            title: 'rueda',
            letter: 'r',
            url: rueda,
            selected: false,
            sound: ''
          },
          {
            title: 'lata',
            letter: 'l',
            url: lata,
            selected: false,
            sound: ''
          }
        ]
      }
    }
}
</script>