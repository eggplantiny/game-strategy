import { GameHistory, Strategy } from "../../type";

export default class FriedMan extends Strategy {
    constructor () {
        super(FriedMan.name);
    }

    play (gameHistory: GameHistory): boolean {
        const counterpartHistory = gameHistory.counterpartHistory

        if (counterpartHistory.length === 0) {
            return true
        }

        return !counterpartHistory.some(state => !state)
    }
}
