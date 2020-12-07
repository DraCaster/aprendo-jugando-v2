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
import mago from '../../../assets/cards/mago.png'
import nido from '../../../assets/cards/nido.png'
import nena from '../../../assets/cards/nena.png'
import moto from '../../../assets/cards/moto.png'
import nube from '../../../assets/cards/nube.png'
import moneda from '../../../assets/cards/moneda.png'
import raton from '../../../assets/cards/raton.png'
import suma from '../../../assets/cards/suma.png'
import nudo from '../../../assets/cards/nudo.png'
import Header from "../../../components/Header/Header";
import ButtonHome from "../../../components/ButtonHome/ButtonHome";

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
            title: 'mago',
            letter: 'm',
            url: mago,
            sound: ''
          },
          {
            title: 'nido',
            letter: 'n',
            url: nido,
            sound: ''
          },
          {
            title: 'nena',
            letter: 'n',
            url: nena,
            sound: ''
          },
          {
            title: 'moto',
            letter: 'm',
            url: moto,
            sound: ''
          },
          {
            title: 'nube',
            letter: 'n',
            url: nube,
            sound: ''
          },
          {
            title: 'moneda',
            letter: 'm',
            url: moneda,
            sound: ''
          },
          {
            title: 'raton',
            letter: 'r',
            url: raton,
            sound: ''
          },
          {
            title: 'suma',
            letter: 's',
            url: suma,
            sound: ''
          },
          {
            title: 'nudo',
            letter: 'n',
            url: nudo,
            sound: ''
          }
        ]
      }
    }
}
</script>