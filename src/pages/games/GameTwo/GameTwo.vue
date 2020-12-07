<template>
  <v-row>
    <Header title="AGRUPAR"/>
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
import Header from "../../../components/Header/Header"
import ButtonHome from "../../../components/ButtonHome/ButtonHome";

//Images
import{
  auto,
    espejo,
    arania,
    escoba,
    anana,
    empanadas,
    elefante,
    aro
} from '../../../helpers/images.js'

export default {
  components: {
    ButtonHome,
    TableImages,
    Header
  },
  data() {
    return {
      items: [
        {
          title: 'auto',
          letter: 'a',
          url: auto,
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
          title: 'arania',
          letter: 'a',
          url: arania,
          selected: false,
          sound: ''
        },
        {
          title: 'escoba',
          letter: 'e',
          url: escoba,
          selected: false,
          sound: ''
        },
        {
          title: 'anana',
          letter: 'a',
          url: anana,
          selected: false,
          sound: ''
        },
        {
          title: 'empanada',
          letter: 'e',
          url: empanadas,
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
          title: 'aro',
          letter: 'a',
          url: aro,
          selected: false,
          sound: ''
        }
      ]
    }
  }

}
</script>