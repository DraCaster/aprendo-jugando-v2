<template>
  <v-container>
    <v-row>
      <Header title="ARMA LAS PALABRAS"/>
      <v-col cols="12">
        <v-card
            class="mx-auto background"
           >
          <v-row>
            <v-col
                v-for="item in letters"
                :key="item.id"
                :cols="$vuetify.breakpoint.xs ? '4' : '2'"
            >
              <v-img
                  @mouseover="imageAnimated = true"
                  @mouseleave="imageAnimated = false"
                  :src="item.url"
                  :width="$vuetify.breakpoint.xs ? '50' : '100'"
                  :class="{'paint': item.selected, 'slideDownBtn': imageAnimated}"
                  v-on:click="
                  selectItem(images,item);
                  removePainted(item)"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="4" v-for="image in images" :key="image.id">
        <v-card>
          <img :src="image.url" class="item">
          <table id="image.letter" class="tablas">
            <tr>
              <td>
                <div class="box-image"></div>
              </td>
              <td>
                <div class="box-image"></div>
              </td>
              <td>
                <div class="box-image"></div>
              </td>
            </tr>
          </table>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>
<script>
import Header from "../../../components/Header/Header";
import {a, ola, l, o, oso, r, u, s, uno} from '../../../helpers/images'
import {olaSound, osoSound, unoSound,a as aSound, l as lSound, o as oSound, r as rSound,
u as uSound, s as sSound} from "../../../helpers/sounds";

export default {
  components: {Header},
  data() {
    return {
      sounds:[],
      letters: [
        {
          id: 0,
          title: 'a',
          letter: 'a',
          url: a,
          selected: false,
          sound: aSound
        },
        {
          id: 1,
          title: 'o',
          letter: 'o',
          url: o,
          selected: false,
          sound: oSound
        },
        {
          id: 2,
          title: 'l',
          letter: 'l',
          url: l,
          selected: false,
          sound: lSound
        },
        {
          id: 3,
          title: 'r',
          letter: 'r',
          url: r,
          selected: false,
          sound: rSound
        },
        {
          id: 4,
          title: 'u',
          letter: 'u',
          url: u,
          selected: false,
          sound: uSound
        },
        {
          id: 5,
          title: 'o',
          letter: 'o',
          url: o,
          selected: false,
          sound: oSound
        },
        {
          id: 6,
          title: 'o',
          letter: 'o',
          url: o,
          selected: false,
          sound: oSound
        },
        {
          id: 7,
          title: 's',
          letter: 's',
          url: s,
          selected: false,
          sound: sSound
        },
        {
          id: 8,
          title: 'o',
          letter: 'o',
          url: o,
          selected: false,
          sound: oSound
        },
      ],
      images: [
          {
        id: 0,
        title: 'ola',
        letter: 'o',
        url: ola,
        selected: false,
        sound: olaSound
      },
        {
          id: 2,
          title: 'oso',
          letter: 'o',
          url: oso,
          selected: false,
          sound: osoSound
        },
        {
          id: 1,
          title: 'uno',
          letter: 'u',
          url: uno,
          selected: false,
          sound: unoSound
        }
      ]
    }
  },
  methods: {
    generateSounds() {
      let audio
      this.letters.forEach(item => {
        audio = new Audio(item.sound)
        this.sounds.push({[item.title]: audio})
      })
    },
    selectItem(items, itemSelected) {
      itemSelected.selected = !itemSelected.selected
      this.sounds[itemSelected.id][itemSelected.title].play()
    },
    removePainted(exceptedItem) {
      return this.images.map(item => {
        if (item.title !== exceptedItem.title) {
          item.selected = false
        }
      })
    }
  }
}
</script>
<style>
.item{
  width: 50%;
}

.box-image{
  border-bottom: 4px solid blue;
  width: 60px;
  height: 60px;
}

.paint {
  border: 5px solid #e25b2a;
}
.background{
  background-color: burlywood;
}
</style>