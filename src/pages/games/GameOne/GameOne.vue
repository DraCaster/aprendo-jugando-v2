<template>
  <v-row>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="400">
        <v-card-title class="justify-center">¿QUE VOY A DECIR?</v-card-title>
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
import uno from '../../../assets/cards/uno.png'
import oso from '../../../assets/cards/oso.png'
import aro from '../../../assets/cards/aro.png'
import ola from '../../../assets/cards/ola.png'
import empanadas from '../../../assets/cards/empanadas.png'
import ala from '../../../assets/cards/ala.png'

export default {
 components:{
   TableImages
 },
  data() {
    return {
      items: [
        {
          title: 'espada',
          letter: 'e',
          url: espada,
          sound: '../../assets/sounds/words/espada.wav'
        },
        {
          title: 'uno',
          letter: 'u',
          url: uno,
          sound: '../../../assets/sounds/words/uno.wav'
        },
        {
          title: 'oso',
          letter: 'o',
          url: oso,
          sound: '../../../assets/sounds/words/oso.wav'
        },
        {
          title: 'aro',
          letter: 'a',
          url: aro,
          sound: '../../../assets/sounds/words/aro.wav'
        },
        {
          title: 'ola',
          letter: 'o',
          url: ola,
          sound: '../../../assets/sounds/words/ola.wav'
        },
        {
          title: 'empanadas',
          letter: 'e',
          url: empanadas,
          sound: '../../../assets/sounds/words/empanadas.wav'
        },
        {
          title: 'ala',
          letter: 'a',
          url: ala,
          sound: '../../../assets/sounds/words/ala.wav'
        }]
    }}
}
</script>