import { Strategy } from "../../type";

export default class AllTrust extends Strategy {
    play (): boolean {
        return true
    }
}
