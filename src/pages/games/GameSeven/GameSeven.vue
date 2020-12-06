<template>
  <v-row>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="400">
        <v-card-title class="justify-center">ARMAR PAREJAS</v-card-title>
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
import rana from '../../../assets/cards/rana.png'
import media from '../../../assets/cards/media.png'
import sifon from '../../../assets/cards/sifon.png'
import sillon from '../../../assets/cards/sillon.png'
import munieca from '../../../assets/cards/munieca.png'
import suma from '../../../assets/cards/suma.png'
import rueda from '../../../assets/cards/rueda.png'
import lata from '../../../assets/cards/lata.png'

export default {
  components:{
    TableImages
  },
    data(){
      return {
        items: [
          {
            title: 'rana',
            letter: 'r',
            url: rana,
            sound: ''
          },
          {
            title: 'media',
            letter: 'm',
            url: media,
            sound: ''
          },
          {
            title: 'sifon',
            letter: 's',
            url: sifon,
            sound: ''
          },
          {
            title: 'sillon',
            letter: 's',
            url: sillon,
            sound: ''
          },
          {
            title: 'munieca',
            letter: 'm',
            url: munieca,
            sound: ''
          },
          {
            title: 'suma',
            letter: 's',
            url: suma,
            sound: ''
          },
          {
            title: 'rueda',
            letter: 'r',
            url: rueda,
            sound: ''
          },
          {
            title: 'lata',
            letter: 'l',
            url: lata,
            sound: ''
          }
        ]
      }
    }
}
</script>