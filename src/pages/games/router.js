import GameOne from "./GameOne";
import GameTwo from "./GameTwo";
import GameThree from "./GameThree";
import GameFour from "./GameFour";
import GameFive from "./GameFive";
import GameSix from "./GameSix";
import GameSeven from "./GameSeven";
import GameEight from "./GameEight";
import GameNine from "./GameNine";
import GameTen from "./GameTen";

const gameRoutes = [
  { name: "gameOne", path: "/gameone", component: GameOne },
  { name: "gameTwo", path: "/gametwo", component: GameTwo },
  { name: "gameThree", path: "/gamethree", component: GameThree },
  { name: "gameFour", path: "/gamefour", component: GameFour },
  { name: "gameFive", path: "/gamefive", component: GameFive },
  { name: "gameSix", path: "/gamesix", component: GameSix },
  { name: "gameSeven", path: "/gameseven", component: GameSeven },
  { name: "gameEight", path: "/gameeight", component: GameEight },
  { name: "gameNine", path: "/gamenine", component: GameNine },
  { name: "gameTen", path: "/gameten", component: GameTen },
];

export default gameRoutes;
