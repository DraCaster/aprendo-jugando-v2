<template>
  <v-row align="center">
    <v-col cols="12">
      <v-card max-width="600" class="mx-auto">
        <v-card-title>ELEGI UNA OPCION
          <v-avatar
              class="slideDownBtn">
            <img
                class="slideDownBtn"
                src="../../assets/arrowbottom.png"
                alt="arrow"
            >
          </v-avatar>
        </v-card-title>

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

            <v-list-item-action
                @mouseover="enableOrDisableAnimation(activity)"
                @onmouseout="enableOrDisableAnimation(activity)">
              <v-btn
                  fab
                  small
                  :to="activity.path"
                  :class="{'white--text animateBtn': activity.animate, 'white--text': !activity.animate}"
                  color="teal">
                <v-icon
                >
                  mdi-arrow-right-thick
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto"
              max-width="100">
        <v-card-actions>
          <ButtonHome/>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import ButtonHome from "../../components/ButtonHome/ButtonHome";

export default {
  components: {ButtonHome},
  data: () => ({
    activities: [
      {
        color: "blue",
        icon: "mdi-book",
        subtitle: "¿QUE VOY A DECIR?",
        title: "SESION 1",
        animate: false,
        path: "/gameone",
      },
      {
        color: "yellow",
        icon: "mdi-book",
        subtitle: "AGRUPAR",
        title: "SESION 2",
        animate: false,
        path: "/gametwo",
      },
      {
        color: "green",
        icon: "mdi-book",
        subtitle: "ARMAR PAREJAS",
        title: "SESION 3",
        animate: false,
        path: "/gamethree",
      },
      {
        color: "orange",
        icon: "mdi-book",
        subtitle: "NAIPES",
        title: "SESION 4",
        animate: false,
        path: "/gamefour",
      },
      {
        color: "blue",
        icon: "mdi-book",
        subtitle: "EL TREN",
        title: "SESION 5",
        animate: false,
        path: "/gamefive",
      },
      {
        color: "amber",
        icon: "mdi-book",
        subtitle: "EL PUEBLO MANDA",
        title: "SESION 6",
        animate: false,
        path: "/gamesix",
      },
      {
        color: "blue",
        icon: "mdi-book",
        subtitle: "ARMAR PAREJAS",
        title: "SESION 7",
        animate: false,
        path: "/gameseven",
      },
      {
        color: "pink",
        icon: "mdi-book",
        subtitle: "¿EN QUE FILA VAN?",
        title: "SESION 8",
        animate: false,
        path: "/gameeight",
      },
      {
        color: "blue",
        icon: "mdi-book",
        subtitle: "EL TREN",
        title: "SESION 9",
        animate: false,
        path: "/gamenine",
      },
      {
        color: "amber",
        icon: "mdi-book",
        subtitle: "-",
        title: "SESION 10",
        animate: false,
        path: "/gameten",
      },
    ],
  }),
  methods: {
    enableOrDisableAnimation(item){
      item.animate = !item.animate
    }
  }
};
</script>
<style scoped>

.slideDownBtn {
  width: 50px;
  height: 50px;
  animation-iteration-count: 3;
  animation-name: slideDownBtn;
  -webkit-animation-name: slideDownBtn;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  animation-timing-function: ease;
  -webkit-animation-timing-function: ease;
  visibility: visible !important;
}

@keyframes slideDownBtn {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(8%);
  }
  65% {
    transform: translateY(-4%);
  }
  80% {
    transform: translateY(4%);
  }
  95% {
    transform: translateY(-2%);
  }
  100% {
    transform: translateY(0%);
  }
}

@-webkit-keyframes slideDownBtn {
  0% {
    -webkit-transform: translateY(-100%);
  }
  50% {
    -webkit-transform: translateY(8%);
  }
  65% {
    -webkit-transform: translateY(-4%);
  }
  80% {
    -webkit-transform: translateY(4%);
  }
  95% {
    -webkit-transform: translateY(-2%);
  }
  100% {
    -webkit-transform: translateY(0%);
  }
}

.animateBtn {
  animation-name: balanceo;
  animation-duration: 2s;
  animation-iteration-count: 8;
}

@-webkit-keyframes balanceo {
  20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
  }
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale(1.1) rotate(3deg);
  }
  40%,
  60%,
  80% {
    -webkit-transform: scale(1, 1) rotate(-3deg);
  }
}

</style>
