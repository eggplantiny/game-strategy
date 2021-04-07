import {AllTrust, TFT} from './strategy'
import {GameState, History, Strategy} from "./type"
import Player from "./player";

function play (h1 : History, h2 : History, s1 : Strategy, s2 : Strategy) : GameState {

    const s1Item = s1.play(h1, h2)
    const s2Item = s2.play(h2, h1)

    if (s1Item === s2Item) {
        return s1Item ? GameState.ALL_C : GameState.ALL_B
    }

    return s1Item ? GameState.P1 : GameState.P2
}

function scoring (p1 : Player, p2: Player, gameState: GameState) : void {
    const allCooperate = 3;
    const allBetray = 1;
    const win = 5;
    const loose = 0;

    if (gameState === GameState.ALL_C) {
        p1.score += allCooperate
        p2.score += allCooperate
    } else if (gameState === GameState.ALL_B) {
        p1.score += allBetray
        p2.score += allBetray
    } else if (gameState === GameState.P1) {
        p1.score += win;
        p2.score += loose;
    } else if (gameState === GameState.P2) {
        p1.score += loose;
        p2.score += win
    }
}

function playGame () : void {
    const tft = new TFT()
    const allTrust = new AllTrust()

    const tftHistory : boolean[] = []
    const allTrustHistory : boolean[] = []

    const result = play(tftHistory, allTrustHistory, tft, allTrust)

    console.log(result)
}

playGame()
