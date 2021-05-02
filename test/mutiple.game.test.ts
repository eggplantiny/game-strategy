import {AllBetrayer, AllCooperator, TFT, Random, Joss, FriedMan, TF2T} from "../src/strategy";
import Player from "../src/player";
import { GameManager } from '../src/game';
import { ScoreBoard } from "../src/type";
import ZigZag from "../src/strategy/modules/ZigZag";
import {exportFile} from "../src/utils/exportFile";

describe(' Multiple game class test', () => {
    const tft = new TFT()
    const allC = new AllCooperator()
    const allB = new AllBetrayer()
    const random = new Random(0.2)
    const joss = new Joss()
    const zigZag = new ZigZag()
    const friedMan = new FriedMan()
    const tf2t = new TF2T()

    const tftPlayer = new Player(tft, 'TFT', '#635fa1')
    const allCPlayer = new Player(allC, 'All C', '#fefefe')
    const zigZagPlayer = new Player(zigZag, 'Zig Zag', '#0ff0f0')
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
    gameManager.addParticipant(zigZagPlayer)

    gameManager.playGame(() => {
        // tftPlayer.printHistory(zigZagPlayer)
    })

    const scoreBoards: Array<ScoreBoard> = gameManager.getScores()
    console.log(scoreBoards)

    const gameReport = gameManager.exportGameReports()
    const data = JSON.stringify(gameReport, null, 2)
    exportFile('hello.json', data)

    it('Winner is', function () {
        const winner: Player = gameManager.winnerIs()
        expect('Fried Man').toBe(winner.name)
    })
})
