import GameOne from "./GameOne/GameOne";
import GameOnePartTwo from "./GameOne/GameOnePartTwo";
import GameTwo from "./GameTwo/GameTwo";
import GameTwoPartTwo from "./GameTwo/GameTwoPartTwo";
import GameThree from "./GameThree/GameThree";
import GameFour from "./GameFour/GameFour";
import GameFive from "./GameFive/GameFive";
import GameSix from "./GameSix/GameSix";
import GameSixPartTwo from "./GameSix/GameSixPartTwo";
import GameSeven from "./GameSeven/GameSeven";
import GameEight from "./GameEight/GameEight";
import GameNine from "./GameNine/GameNine";
import GameTen from "./GameTen/GameTen";

const gameRoutes = [
  { name: "gameOne", path: "/gameone", component: GameOne },
  {name:"gameOnePartTwo", path: "/gameoneparttwo", component: GameOnePartTwo},
  { name: "gameTwo", path: "/gametwo", component: GameTwo },
  { name: "gameTwoPartTwo", path: "/gametwoparttwo", component: GameTwoPartTwo},
  { name: "gameThree", path: "/gamethree", component: GameThree },
  { name: "gameFour", path: "/gamefour", component: GameFour },
  { name: "gameFive", path: "/gamefive", component: GameFive },
  { name: "gameSix", path: "/gamesix", component: GameSix },
  { name: "gameSixPartTwo", path: "/gamesixparttwo", component: GameSixPartTwo },
  { name: "gameSeven", path: "/gameseven", component: GameSeven },
  { name: "gameEight", path: "/gameeight", component: GameEight },
  { name: "gameNine", path: "/gamenine", component: GameNine },
  { name: "gameTen", path: "/gameten", component: GameTen },
];

export default gameRoutes;
