<template>
    <v-container>
      <v-row dense>
        <v-col
          cols="12"
        >
          <v-card
          :color="color"
            
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  :color="colorTitle"
                  
                  v-text="title"
                ></v-card-title>
                <v-card-action>
                  <v-btn
                    color="#9C27B0"
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    ENTRAR
                  </v-btn>
                </v-card-action>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img src="../assets/img/tina.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'MenuHome',
    data: () => ({
          colorTitle:'#9C27B0',
          color: '#FCE4EC',
          title: 'JUEGOS Y ACTIVIDADES',
    }),
  }
</script>
