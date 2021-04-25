import { GameHistory, Strategy } from "../../type";

export default class Joss extends Strategy {

    private _threshold: number;

    constructor (threshold = 0.9) {
        super();
        this._threshold = threshold;
    }

    play (gameHistory: GameHistory): boolean {
        const threshold = this._threshold;
        const counterpartHistory = gameHistory.counterpartHistory;

        if (Math.random() > threshold) {
            return false;
        }

        if (counterpartHistory.length === 0) {
            return true;
        }

        return counterpartHistory[counterpartHistory.length - 1];
    }
}
