import { Strategy } from "../../type"

export default class AllCooperator extends Strategy {
    private _threshold: number;

    constructor (threshold = 0.5) {
        super();
        this._threshold = threshold;
    }

    play (): boolean {
        const threshold = this._threshold;
        return Math.random() > threshold;
    }
}
