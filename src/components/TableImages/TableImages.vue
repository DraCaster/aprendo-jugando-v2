<template>
  <v-col cols="12">
    <v-card
        class="mx-auto"
        max-width="500">
      <v-row>
        <v-col
            v-for="item in images"
            :key="item.id"
            class="d-flex child-flex"
            cols="3"
        >
          <v-img
              :src="item.url"
              :lazy-src="item.url"
              aspect-ratio="1"
              :class="{'paint': item.selected}"
              v-on:click="
          selectItem(images,item);
          removePainted(item)"
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
    </v-card>
  </v-col>
</template>
<script>

export default {
  props: {
    items: {}
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
</style>