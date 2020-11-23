<template>
  <v-row>
    <v-col
        v-for="n in items"
        :key="n.title"
        class="d-flex child-flex"
        cols="3"
    >
      <v-img
          :src="n.url"
          :lazy-src="n.url"
          aspect-ratio="1"
          class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
          >
            <v-progress-circular
                indeterminate
                color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>
<script>

import espada from '../../assets/cards/espada.png'
import uno from '../../assets/cards/uno.png'
import oso from '../../assets/cards/oso.png'
import aro from '../../assets/cards/aro.png'
import ola from '../../assets/cards/ola.png'
import empanadas from '../../assets/cards/empanadas.png'
import ala from '../../assets/cards/ala.png'

export default {

  data() {
    return {
      items: [{
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
    }
  }

}
</script>