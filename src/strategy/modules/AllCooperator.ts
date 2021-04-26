import { Strategy } from "../../type";

export default class AllCooperator extends Strategy {
    constructor () {
        super(AllCooperator.name);
    }

    play (): boolean {
        return true
    }
}
