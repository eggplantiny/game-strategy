import { GameHistory, Strategy } from "../../type";

export default class TFTWO extends Strategy {
    constructor () {
        super(TFTWO.name);

    }

    play (gameHistory: GameHistory): boolean {
        const counterpartHistory = gameHistory.counterpartHistory
        const odds = 0.8

        if (counterpartHistory.length === 0) {
            return true
        }

        const result = counterpartHistory[counterpartHistory.length - 1]

        if (result === false) {
            if (Math.random() > odds) {
                return true
            }
        }

        return result
    }
}
