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

export default {
  props:{
    items: []
  }
}
</script>