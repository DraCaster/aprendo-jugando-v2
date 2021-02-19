<template>
  <v-col cols="12">
    <v-card
        class="mx-auto background"
        :max-width="maxWidth">
      <v-row>
        <v-col
            v-for="item in images"
            :key="item.id"
            :cols="$vuetify.breakpoint.xs ? '4' : '3'"
        >
          <v-img
              @mouseover="imageAnimated = true"
              @mouseleave="imageAnimated = false"
              :src="item.url"
              :width="$vuetify.breakpoint.xs ? '100' : '250'"
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
</template>
<script>

export default {
  props: {
    items: {},
    cols: {type: String, default: "3"},
    maxWidth:{type: String, default: "500"}
  },
  mounted() {
    this.generateSounds()
    console.log(this.cols)
  },
  data() {
    return {
      sounds: [],
      imageAnimated: false
    }
  },
  methods: {
    generateSounds() {
      let audio
      this.items.forEach(item => {
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
  },
  computed:
      {
        images: {
          get() {
            return this.items;
          },
          set(val) {
            this.items = val
          }
        },
      },
}
</script>

<style scoped>
.paint {
  border: 5px solid #e25b2a;
}
.background{
  background-color: burlywood;
}

@keyframes slideDownBtn {
  0% {
    transform: translateY(-100%);
  }
  50%{
    transform: translateY(8%);
  }
  65%{
    transform: translateY(-4%);
  }
  80%{
    transform: translateY(4%);
  }
  95%{
    transform: translateY(-2%);
  }
  100% {
    transform: translateY(0%);
  }
}

@-webkit-keyframes slideDownBtn {
  0% {
    -webkit-transform: translateY(-100%);
  }
  50%{
    -webkit-transform: translateY(8%);
  }
  65%{
    -webkit-transform: translateY(-4%);
  }
  80%{
    -webkit-transform: translateY(4%);
  }
  95%{
    -webkit-transform: translateY(-2%);
  }
  100% {
    -webkit-transform: translateY(0%);
  }
}
</style>