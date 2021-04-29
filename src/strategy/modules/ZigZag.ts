
import { GameHistory, Strategy } from "../../type";

export default class ZigZag extends Strategy {
    constructor () {
        super(ZigZag.name);
    }

    play (gameHistory: GameHistory): boolean {
        return gameHistory.myHistory.length % 2 === 0
    }
}
