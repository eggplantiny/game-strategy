import {AllBetrayer, AllCooperator, TFT, Random, Joss, FriedMan, TF2T} from "../src/strategy";
import Player from "../src/player";
import { GameManager } from '../src/game';
import {GameReport, ScoreBoard, Strategy} from "../src/type";
import ZigZag from "../src/strategy/modules/ZigZag";
import {exportFile} from "../src/utils/exportFile";

function makePlayerList (strategy: Strategy, color: string, prefix: string, size: number = 10): Array <Player> {
    return Array(size).fill(0).map((_, index) => new Player(strategy, `${prefix}-${index + 1}`, color))
}

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

    // const gameReport = gameManager.exportGameReports()

    // const data = JSON.stringify(gameReport, null, 2)

    // exportFile('hello.json', data)

    it('Winner is', function () {
        const winner: Player = gameManager.winnerIs()
        expect('TFT').toBe(winner.name)
    })
})

describe('Super Multiple Game', () => {
    const tft = new TFT()
    const allB = new AllBetrayer()
    const random = new Random(0.2)
    const joss = new Joss()
    const zigZag = new ZigZag()
    const friedMan = new FriedMan()
    const tf2t = new TF2T()

    const size = 10

    const playerInfoList = [
        { name: 'TFT', color: '#635fa1', strategy: tft },
        // { name: 'All B', color: '#fe5325', strategy: allB },
        // { name: 'Random', color: '#e2589e', strategy: random },
        { name: 'Joss', color: '#6311a1', strategy: joss },
        { name: 'Zig Zag', color: '#0ff0f0', strategy: zigZag },
        { name: 'Fried Man', color: '#5310f1', strategy: friedMan },
        { name: 'TF2T', color: '#756fa1', strategy: tf2t }
    ]

    const playerList = playerInfoList
        .map(playerInfo => makePlayerList(playerInfo.strategy, playerInfo.color, playerInfo.name, size))
        .reduce((prev, arr) => [...prev, ...arr], [])

    const retrySize = 5
    const gameSize = 20

    const gameManager = new GameManager(retrySize, gameSize)
    gameManager.addParticipants(playerList)

    gameManager.playGame()

    const scoreBoards: Array<ScoreBoard> = gameManager.getScores()
    console.log(scoreBoards)

    it('Winner is', function () {
        const winner: Player = gameManager.winnerIs()
        expect('Fried Man').toBe(winner.name.split('-')[0])
    })
})
