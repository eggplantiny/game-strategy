import {AllBetrayer, AllCooperator, TFT, Random, Joss, FriedMan, TF2T} from "../src/strategy";
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
    const tf2t = new TF2T()

    const tftPlayer = new Player(tft, 'TFT', '#635fa1')
    const allCPlayer = new Player(allC, 'All C', '#fefefe')
    const allBPlayer = new Player(allB, 'All B', '#fe5325')
    const randomPlayer = new Player(random, 'Random', '#e2589e')
    const jossPlayer = new Player(joss, 'Joss', '#6311a1')
    const friedManPlayer = new Player(friedMan, 'Fried Man', '#5310f1')
    const tf2tPlayer = new Player(tf2t, 'TF2T', '#756fa1')

    const retrySize = 5
    const gameSize = 20

    const gameManager = new GameManager(retrySize, gameSize)

    gameManager.addParticipant(tftPlayer)
    gameManager.addParticipant(allCPlayer)
    gameManager.addParticipant(allBPlayer)
    gameManager.addParticipant(randomPlayer)
    gameManager.addParticipant(jossPlayer)
    gameManager.addParticipant(friedManPlayer)
    gameManager.addParticipant(tf2tPlayer)

    gameManager.playGame(() => {
        const scoreBoards = gameManager.getScores()
        // console.log(scoreBoards)
        tf2tPlayer.printHistory(tftPlayer)
    })
    const scoreBoards: Array<ScoreBoard> = gameManager.getScores()

    // scoreBoards.forEach((scoreBoard: ScoreBoard) => {
    //     console.log(`[${scoreBoard.name}] ${scoreBoard.score}`)
    // })
    console.log(scoreBoards)
    const gameHistory = tf2tPlayer.exportHistory(randomPlayer)
    console.log(JSON.stringify(gameHistory, null, 4))

    it('Winner is', function () {
        const winner: Player = gameManager.winnerIs()
        expect('Fried Man').toBe(winner.name)
    })
})
