import { GameHistory, Strategy } from "../../type";

export default class TFT extends Strategy {
    constructor () {
        super(TFT.name);

    }

    play (gameHistory: GameHistory): boolean {
        const counterpartHistory = gameHistory.counterpartHistory

        if (counterpartHistory.length === 0) {
            return true
        }

        return counterpartHistory[counterpartHistory.length - 1]
    }
}
