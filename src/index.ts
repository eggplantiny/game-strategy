import { AllCooperator, AllBetrayer, TFT } from './strategy'
import { GameState } from "./type"
import Player from "./player";

function play (p1: Player, p2: Player) : GameState {

    const s1 = p1.play(p2)
    const s2 = p2.play(p1)

    if (s1 === s2) {
        return s1 === true ? GameState.ALL_C : GameState.ALL_B
    }

    console.log(s1 === true ? GameState.P2 : GameState.P1)

    return s1 === true ? GameState.P2 : GameState.P1
}

function scoring (p1 : Player, p2: Player, gameState: GameState) : void {
    const allCooperate = 3;
    const allBetray = 1;
    const win = 5;
    const loose = 0;

    if (gameState === GameState.ALL_C) {
        p1.score += allCooperate
        p2.score += allCooperate
    }
    else if (gameState === GameState.ALL_B) {
        p1.score += allBetray
        p2.score += allBetray
    }
    else if (gameState === GameState.P1) {
        p1.score += win;
        p2.score += loose;
    }
    else if (gameState === GameState.P2) {
        p1.score += loose;
        p2.score += win
    }
}

function playGame () : void {
    const tft = new TFT()
    const allCooperator = new AllCooperator()
    const allBetrayer = new AllBetrayer()

    const tftPlayer = new Player(tft, 'TFT', '#635fa1')
    const allCooperatePlayer = new Player(allCooperator, 'AllCooperator', '#fefefe')
    const allBetrayPlayer = new Player(allBetrayer, 'AllBetrayer', '#e35e5e')

    const gameState = play(tftPlayer, allBetrayPlayer)
    scoring(tftPlayer, allBetrayPlayer, gameState)

    console.log(gameState, tftPlayer.score, allBetrayPlayer.score)
}

playGame()
