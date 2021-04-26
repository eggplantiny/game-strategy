import { Strategy } from "../../type";

export default class AllBetrayer extends Strategy {
    constructor () {
        super(AllBetrayer.name);
    }

    play (): boolean {
        return false
    }
}
