import { GameHistory, PlayerName, Strategy } from "../../type";

export default class TF2T extends Strategy {
    private _betrayalCountMap: Map<string, number>;

    constructor () {
        super(TF2T.name);
        this._betrayalCountMap = new Map();
    }

    private getBetrayalCount (counterpartName: PlayerName): number {
         if (!this._betrayalCountMap.has(counterpartName)) {
             this._betrayalCountMap.set(counterpartName, 0)
         }

         return this._betrayalCountMap.get(counterpartName)!
    }

    private setBetrayalCount (counterpartName: PlayerName, count: number): void {
        this._betrayalCountMap.set(counterpartName, count)
    }

    play (gameHistory: GameHistory, counterpartName: PlayerName): boolean {
        const counterpartHistory = gameHistory.counterpartHistory;

        if (counterpartHistory.length === 0) {
            return true;
        }

        const lastState = counterpartHistory[counterpartHistory.length - 1];
        const betrayalCount = this.getBetrayalCount(counterpartName);

        if (lastState) {
            this.setBetrayalCount(counterpartName, 0)
            return true;
        }

        if (betrayalCount === 0) {
            this.setBetrayalCount(counterpartName, betrayalCount + 1)
            return true;
        }

        return false;
    }
}
