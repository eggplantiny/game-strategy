import { Strategy } from "../../type"

export default class AllCooperator extends Strategy {
    play (): boolean {
        return Math.random() > 0.5
    }
}
