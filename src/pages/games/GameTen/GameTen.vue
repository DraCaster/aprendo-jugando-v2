<template>
  <v-row>
    <Header title="-"/>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="500">
      <h4>en esta seccion  van a estar las imagenes</h4>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card
          class="mx-auto"
          max-width="173">
        <v-card-actions>
          <ButtonHome/>
          <v-btn
              class="mx-2"
              fab
              dark
              large
              color="green"
          >
            <v-icon dark>
              mdi-check
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

</template>
<script>
import Header from "../../../components/Header/Header";
import ButtonHome from "../../../components/ButtonHome/ButtonHome";
export default {
  components: {ButtonHome, Header}
}
</script>