<template>
  <v-row>
    <Header title="EL PUEBLO MANDA"/>
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
  mano,
  martillo,
  venda,
  tambor,
  mago,
  manzana,
  mesa,
  nariz,
  reloj,
  volcan,
  mono
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
            title: 'mano',
            letter: 'm',
            url: mano,
            selected: false,
            sound: ''
          },
          {
            title: 'martillo',
            letter: 'm',
            url: martillo,
            selected: false,
            sound: ''
          },
          {
            title: 'venda',
            letter: 'v',
            url: venda,
            selected: false,
            sound: ''
          },
          {
            title: 'tambor',
            letter: 't',
            url: tambor,
            selected: false,
            sound: ''
          },
          {
            title: 'mago',
            letter: 'm',
            url: mago,
            selected: false,
            sound: ''
          },
          {
            title: 'manzana',
            letter: 'm',
            url: manzana,
            selected: false,
            sound: ''
          },
          {
            title: 'mesa',
            letter: 'm',
            url: mesa,
            selected: false,
            sound: ''
          },
          {
            title: 'nariz',
            letter: 'n',
            url: nariz,
            selected: false,
            sound: ''
          },
          {
            title: 'reloj',
            letter: 'r',
            url: reloj,
            selected: false,
            sound: ''
          },
          {
            title: 'volcan',
            letter: 'v',
            url: volcan,
            selected: false,
            sound: ''
          },
          {
            title: 'mono',
            letter: 'm',
            url: mono,
            selected: false,
            sound: ''
          }
        ]
      }
    }
    
}
</script>