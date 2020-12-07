<template>
  <v-row justify="center">
      <v-card>
        <v-card-title class="headline">
          {{ this.title }}
        </v-card-title>

        <v-card-text>
          <v-img
              :src="pathImg"
              aspect-ratio="1"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-avatar
              class="align-center"
              @click="$emit('closeDialog',false)">
            <img
                class="balanced"
                src="../../assets/arrowright.png"
                alt="arrow"
            >
          </v-avatar>
        </v-card-actions>
      </v-card>
  </v-row>
</template>
<script>
export default{
  props:{
    title: {type: String, default: "An example title"},
    pathImg: String
  }
}
</script>