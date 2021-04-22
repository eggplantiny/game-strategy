import { AllBetrayer, AllCooperator, TFT, Random } from "../src/strategy";
import Player from "../src/player";
import { GameManager } from '../src/game';
import { ScoreBoard } from "../src/type";

describe(' Multiple game class test', () => {
    const tft = new TFT()
    const allC = new AllCooperator()
    const allB = new AllBetrayer()
    const random = new Random()

    const tftPlayer = new Player(tft, 'TFT', '#635fa1')
    const allCPlayer = new Player(allC, 'All C', '#fefefe')
    const allBPlayer = new Player(allB, 'All B', '#fe5325')
    const randomPlayer = new Player(random, 'Random', '#e2589e')

    const gameSize = 20

    const game = new GameManager(gameSize)

    game.addParticipant(tftPlayer)
    game.addParticipant(allCPlayer)
    game.addParticipant(allBPlayer)
    game.addParticipant(randomPlayer)

    game.playGame()
    const scoreBoards: Array<ScoreBoard> = game.getScores()

    scoreBoards.forEach((scoreBoard: ScoreBoard) => {
        console.log(`[${scoreBoard.name}] ${scoreBoard.score}`)
    })

    it('Winner is', function () {
        const winner: Player = game.winnerIs()
        expect('All B').toBe(winner.name)
    })
})
