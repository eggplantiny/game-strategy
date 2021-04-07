import { Strategy } from "../../type";

export default class TFT extends Strategy {
    play (gameHistory: boolean[]): boolean {
        if (gameHistory.length === 0) {
            return true
        }

        return gameHistory[gameHistory.length - 1]
    }
}
