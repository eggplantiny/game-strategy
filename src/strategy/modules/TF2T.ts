import { GameHistory, Strategy } from "../../type";

export default class TF2T extends Strategy {
    private _betrayalCount: number;

    constructor () {
        super();
        this._betrayalCount = 0;
    }

    public play (gameHistory: GameHistory): boolean {
        const counterpartHistory = gameHistory.counterpartHistory;

        if (counterpartHistory.length === 0) {
            return true;
        }

        const lastState = counterpartHistory[counterpartHistory.length - 1];

        if (lastState) {
            this._betrayalCount = 0;
            return true;
        }

        if (this._betrayalCount === 0) {
            this._betrayalCount += 1;
            return true;
        }

        return false;
    }
}
