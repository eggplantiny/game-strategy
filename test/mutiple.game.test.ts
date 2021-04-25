import {AllBetrayer, AllCooperator, TFT, Random, Joss, FriedMan} from "../src/strategy";
import Player from "../src/player";
import { GameManager } from '../src/game';
import { ScoreBoard } from "../src/type";

describe(' Multiple game class test', () => {
    const tft = new TFT()
    const allC = new AllCooperator()
    const allB = new AllBetrayer()
    const random = new Random(0.2)
    const joss = new Joss()
    const friedMan = new FriedMan()

    const tftPlayer = new Player(tft, 'TFT', '#635fa1')
    const allCPlayer = new Player(allC, 'All C', '#fefefe')
    const allBPlayer = new Player(allB, 'All B', '#fe5325')
    const randomPlayer = new Player(random, 'Random', '#e2589e')
    const jossPlayer = new Player(joss, 'Joss', '#6311a1')
    const friedManPlayer = new Player(friedMan, 'Fried Man', '#5310f1')

    const retrySize = 50
    const gameSize = 10

    const gameManager = new GameManager(retrySize, gameSize)

    gameManager.addParticipant(tftPlayer)
    gameManager.addParticipant(allCPlayer)
    gameManager.addParticipant(allBPlayer)
    gameManager.addParticipant(randomPlayer)
    gameManager.addParticipant(jossPlayer)
    gameManager.addParticipant(friedManPlayer)

    gameManager.playGame(() => {
        const scoreBoards = gameManager.getScores()
        console.log(scoreBoards)
        friedManPlayer.printHistory(jossPlayer)
    })
    const scoreBoards: Array<ScoreBoard> = gameManager.getScores()

    scoreBoards.forEach((scoreBoard: ScoreBoard) => {
        console.log(`[${scoreBoard.name}] ${scoreBoard.score}`)
    })

    it('Winner is', function () {
        const winner: Player = gameManager.winnerIs()
        expect('Fried Man').toBe(winner.name)
    })
})
