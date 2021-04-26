import { Strategy } from "../../type"

export default class Random extends Strategy {
    private readonly _threshold: number;

    constructor (threshold = 0.5) {
        super(Random.name);
        this._threshold = threshold;
    }

    play (): boolean {
        const threshold = this._threshold;
        return Math.random() > threshold;
    }
}
