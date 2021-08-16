import { GameHistory, Strategy } from "../../type";

export default class TFTWO extends Strategy {
    constructor () {
        super(TFTWO.name);

    }

    play (gameHistory: GameHistory): boolean {
        const counterpartHistory = gameHistory.counterpartHistory
        const odds = 0.2

        if (counterpartHistory.length === 0) {
            if (Math.random() > odds) {
                return true
            } else {
                return false
            }
        }

        return counterpartHistory[counterpartHistory.length - 1]
    }
}
