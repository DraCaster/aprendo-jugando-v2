<template>
  <v-row justify="center">
    <v-card>
      <v-card-title class="headline">
        {{ this.title }}
      </v-card-title>

      <v-card-text>
        <v-img
            :src="pathImg"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            class="mx-2"
            align="center"
            fab
            v-if="activateNextGame"
            :to="pathNextGame"
        >
          <v-avatar
              class="align-center"
          >
            <img
                class="balanced"
                src="../../assets/arrowright.png"
                alt="arrow"
            >
          </v-avatar>
        </v-btn>
        <v-btn v-else fab>
          <v-avatar
              class="align-center"
              @click="$emit('closeDialog',false)">
            <img
                class="balanced"
                src="../../assets/arrowright.png"
                alt="arrow"
            >
          </v-avatar>
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-row>
</template>
<script>

export default {
  props: {
    title: {type: String, default: "An example title"},
    pathImg: String,
    pathNextGame: {type: String},
    activateNextGame: Boolean
  }
}
</script>