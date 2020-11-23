<template>
  <v-row>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="400">
        <v-card-title class="justify-center">¿QUE VOY A DECIR?</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="500">
          <TableImages/>
      </v-card>
    </v-col>
  </v-row>

</template>
<script>
import TableImages from '../../components/gameOne/TableImages'
export default {
 components:{
   TableImages
 }
}
</script>