<template>
  <v-col cols="12">
    <v-card
        class="mx-auto background"
        :max-width="maxWidth">
      <v-row>
        <v-col
            v-for="item in images"
            :key="item.id"
            class="background"
            :cols="cols"
        >
          <v-img
              :src="item.url"
              aspect-ratio="1"
              :class="{'paint': item.selected}"
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
  },
  data() {
    return {
      sounds: []
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
</style>