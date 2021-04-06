import { Strategy } from "../strategy";

export default class AllTrust extends Strategy {
    play (): boolean {
        return true
    }
}
