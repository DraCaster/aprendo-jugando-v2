<template>
  <v-col cols="12">
    <v-card
        class="mx-auto"
        max-width="400">
      <v-card-title class="justify-center">{{ this.title }}</v-card-title>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props:{
    title: String
  }
}
</script>