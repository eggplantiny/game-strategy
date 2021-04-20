import { AllBetrayer, AllCooperator, TFT, Random } from "../src/strategy";
import Player from "../src/player";
import { Game2 } from '../src/game';
import {ScoreBoard} from "../src/type";

describe(' Multiple game class test', () => {
    const tft = new TFT()
    const allC = new AllCooperator()
    const allB = new AllBetrayer()

    const tftPlayer = new Player(tft, 'TFT', '#635fa1')
    const allCPlayer = new Player(allC, 'All C', '#fefefe')
    const allBPlayer = new Player(allB, 'All B', '#fe5325')

    const gameSize = 20

    const game = new Game2(gameSize)

    game.addParticipant(tftPlayer)
    game.addParticipant(allCPlayer)
    game.addParticipant(allBPlayer)

    game.playGame()
    const scoreBoards: Array<ScoreBoard> = game.getScores()

    scoreBoards.forEach((scoreBoard: ScoreBoard) => {
        console.log(`[${scoreBoard.name}] ${scoreBoard.score}`)
    })

    it('Test', function () {
        expect(1).toBe(1)
    })
})
