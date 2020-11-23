<template>
  <v-row>
    <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="3"
    >
      <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
export default {

  data() {
    return {
      items: [{
        title: 'espada',
        letter: 'e',
        url: '../../../assets/cards/espada.png',
        sound: '../../../assets/sounds/words/espada.wav'
      },
        {
          title: 'uno',
          letter: 'u',
          url: '../../../assets/cards/uno.png',
          sound: '../../../assets/sounds/words/uno.wav'
        },
        {
          title: 'oso',
          letter: 'o',
          url: '../../../assets/cards/oso.png',
          sound: '../../../assets/sounds/words/oso.wav'
        },
        {
          title: 'aro',
          letter: 'a',
          url: '../../../assets/cards/aro.png',
          sound: '../../../assets/sounds/words/aro.wav'
        },
        {
          title: 'ola',
          letter: 'o',
          url: '../../../assets/cards/ola.png',
          sound: '../../../assets/sounds/words/ola.wav'
        },
        {
          title: 'empanadas',
          letter: 'e',
          url: '../../../assets/cards/empanadas.png',
          sound: '../../../assets/sounds/words/empanadas.wav'
        },
        {
          title: 'ala',
          letter: 'a',
          url: '../../../assets/cards/ala.png',
          sound: '../../../assets/sounds/words/ala.wav'
        }]
    }
  }

}
</script>