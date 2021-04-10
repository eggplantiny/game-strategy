import { scoring, play } from '../src'
import { AllBetrayer, AllCooperator, TFT } from "../src/strategy";
import { Player } from "../src/player/player";

function playGame (p1: Player, p2: Player) : void {
    const gameState = play(p1, p2)
    scoring(p1, p2, gameState)
}

describe('TFT vs All C', () => {
    const tft = new TFT()
    const allCooperator = new AllCooperator()

    const tftPlayer = new Player(tft, 'TFT', '#635fa1')
    const allCooperatePlayer = new Player(allCooperator, 'AllCooperator', '#fefefe')

    playGame(tftPlayer, allCooperatePlayer)

    it('TFT Score', () => {
        expect(tftPlayer.score).toBe(3);
    })

    it('All C Score', () => {
        expect(allCooperatePlayer.score).toBe(3);
    })
})

describe('TFT vs All B', () => {
    const tft = new TFT()
    const allB = new AllBetrayer()

    const tftPlayer = new Player(tft, 'TFT', '#635fa1')
    const allBPlayer = new Player(allB, 'All B', '#e35e5e')

    playGame(tftPlayer, allBPlayer)

    it('TFT Score', () => {
        expect(tftPlayer.score).toBe(0);
    })

    it('All B Score', () => {
        expect(allBPlayer.score).toBe(5)
    })
})
