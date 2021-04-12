import { AllBetrayer, AllCooperator, TFT, Random } from "../src/strategy";
import Player from "../src/player";
import { Game } from '../src/game';

describe('TFT vs All C', () => {
    const tft = new TFT()
    const allCooperator = new AllCooperator()

    const tftPlayer = new Player(tft, 'TFT', '#635fa1')
    const allCPlayer = new Player(allCooperator, 'All C', '#fefefe')

    const gameSize = 10

    const game = new Game(tftPlayer, allCPlayer, gameSize)
    game.play()

    const [p1Score, p2Score] = game.getScore()

    it(`${p1Score.name} Score`, () => {
        expect(p1Score.score).toBe(gameSize * 3)
    })

    it(`${p2Score.name} Score`, () => {
        expect(p2Score.score).toBe(gameSize * 3)
    })
})

describe('TFT vs All B', () => {
    const tft = new TFT()
    const allB = new AllBetrayer()

    const tftPlayer = new Player(tft, 'TFT', '#635fa1')
    const allBPlayer = new Player(allB, 'All B', '#e35e5e')

    const gameSize = 10

    const game = new Game(tftPlayer, allBPlayer, gameSize)
    game.play()

    const [p1Score, p2Score] = game.getScore()

    it(`${p1Score.name} Score`, () => {
        expect(p1Score.score).toBe(0)
    })

    it(`${p2Score.name} Score`, () => {
        expect(p2Score.score).toBe(gameSize * 5)
    })
})

describe('All C vs Random', () => {
    const allC = new AllCooperator()
    const random = new Random()

    const allCPlayer = new Player(allC, 'All C', '#fefefe')
    const randomPlayer = new Player(random, 'Random', '#e2589e')

    const gameSize = 100

    const game = new Game(allCPlayer, randomPlayer, gameSize)
    game.play()

    const [p1Score, p2Score] = game.getScore()

    it('Random Win', function () {
        expect(p1Score.score).toBeLessThan(p2Score.score)
    })
})

describe('TFT vs Random', () => {
    const tft = new TFT()
    const random = new Random()

    const tftPlayer = new Player(tft, 'TFT', '#fefefe')
    const randomPlayer = new Player(random, 'Random', '#e2589e')

    const gameSize = 100

    const game = new Game(tftPlayer, randomPlayer, gameSize)
    game.play()

    const [p1Score, p2Score] = game.getScore()

    it('Random Win', function () {
        expect(p1Score.score).toBeLessThan(p2Score.score)
    })})

describe('All B vs Random', () => {
    const allB = new AllBetrayer()
    const random = new Random()

    const allBPlayer = new Player(allB, 'All B', '#fefefe')
    const randomPlayer = new Player(random, 'Random', '#e2589e')

    const gameSize = 100

    const game = new Game(allBPlayer, randomPlayer, gameSize)
    game.play()

    const [p1Score, p2Score] = game.getScore()

    it('All B Win', function () {
        expect(p1Score.score).toBeGreaterThan(p2Score.score)
    })})
