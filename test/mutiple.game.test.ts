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
    const tftPlayer2 = new Player(tft, 'TFT 2', '#635fa1')
    const tftPlayer3 = new Player(tft, 'TFT 3', '#635fa1')


    const gameSize = 20

    const gameManager = new GameManager(gameSize)

    gameManager.addParticipant(tftPlayer)
    gameManager.addParticipant(allCPlayer)
    gameManager.addParticipant(allBPlayer)
    gameManager.addParticipant(randomPlayer)
    gameManager.addParticipant(tftPlayer2)
    gameManager.addParticipant(tftPlayer3)

    gameManager.playGame(() => {
        const scoreBoards = gameManager.getScores()
        console.log(scoreBoards)
    })
    const scoreBoards: Array<ScoreBoard> = gameManager.getScores()

    scoreBoards.forEach((scoreBoard: ScoreBoard) => {
        console.log(`[${scoreBoard.name}] ${scoreBoard.score}`)
    })

    it('Winner is', function () {
        const winner: Player = gameManager.winnerIs()
        expect('All B').toBe(winner.name)
    })
})
