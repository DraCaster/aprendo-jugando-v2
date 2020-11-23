<template>
  <v-row align="center">
    <v-col cols="12">
      <h4>ELEGI UNA OPCION</h4>
    </v-col>
    <v-col cols="12">
      <v-card max-width="600" class="mx-auto">
        <v-list subheader two-line>
          <v-list-item v-for="activity in activities" :key="activity.title">
            <v-list-item-avatar>
              <v-icon
                :class="activity.color"
                dark
                v-text="activity.icon"
              ></v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="activity.title"></v-list-item-title>

              <v-list-item-subtitle
                v-text="activity.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>

            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12">

    </v-col>
  </v-row>
</template>
<script>
export default {

  data: () => ({
    activities: [
      {
        color: "blue",
        icon: "mdi-book",
        subtitle: "¿QUE VOY A DECIR?",
        title: "SESION 1",
        path: "/gameone",
      },
      {
        color: "yellow",
        icon: "mdi-book",
        subtitle: "AGRUPAR",
        title: "SESION 2",
        path: "/gametwo",
      },
      {
        color: "green",
        icon: "mdi-book",
        subtitle: "ARMAR PAREJAS",
        title: "SESION 3",
        path: "/gamethree",
      },
      {
        color: "orange",
        icon: "mdi-book",
        subtitle: "NAIPES",
        title: "SESION 4",
        path: "/gamefour",
      },
      {
        color: "blue",
        icon: "mdi-book",
        subtitle: "-",
        title: "SESION 5",
        path: "/gamefive",
      },
      {
        color: "amber",
        icon: "mdi-book",
        subtitle: "-",
        title: "SESION 6",
        path: "/gamesix",
      },
      {
        color: "blue",
        icon: "mdi-book",
        subtitle: "-",
        title: "SESION 7",
        path: "/gameseven",
      },
      {
        color: "pink",
        icon: "mdi-book",
        subtitle: "-",
        title: "SESION 8",
        path: "/gameeight",
      },
      {
        color: "blue",
        icon: "mdi-book",
        subtitle: "-",
        title: "SESION 9",
        path: "/gamenine",
      },
      {
        color: "amber",
        icon: "mdi-book",
        subtitle: "-",
        title: "SESION 10",
        path: "/gameten",
      },
    ],
  }),
};
</script>
