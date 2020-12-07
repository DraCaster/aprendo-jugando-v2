<template>
  <v-col cols="12">
    <v-card
        class="mx-auto"
        max-width="400">
      <v-card-title class="justify-center">{{ this.title }}
        <v-avatar
            class="ml-6">
          <img
              @click="playSlogan()"
              :src="imgSound"
              alt="sound Img"
          >
        </v-avatar>
        <v-avatar
            class="ml-2 helpPointer"
            tile>
          <img
              :src="pointerLeft.img"
              alt="pointer left"
              v-show="pointerLeft.hide"
          >
        </v-avatar>
      </v-card-title>
    </v-card>
  </v-col>
</template>
<script>
import helpsound from "../../assets/helpsound.svg"
import pointerleft from "../../assets/pointerleft.png"

export default {
  props:{
    title: String,
    soundTitle: String
  },
  mounted() {
    this.loadingSound(this.soundTitle)
  },
  data(){
    return{
      imgSound: helpsound,
      sound: null,
      pointerLeft:{
        img:pointerleft,
        hide: true
      }
    }
  },
  methods:{
    playSlogan(){
      this.pointerLeft.hide = false
      this.sound.play()
    },
    loadingSound(audio){
      return this.sound = new Audio(audio)
    }
  }
}
</script>

<style scoped>
.helpPointer{
  height: 60px;
  width: 60px;
  animation-name: balanceo;
  animation-duration: 2s;
  animation-iteration-count: 8;
}

@-webkit-keyframes balanceo {
  20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
  }
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale(1.1) rotate(3deg);
  }
  40%,
  60%,
  80% {
    -webkit-transform: scale(1, 1) rotate(-3deg);
  }
}

</style>