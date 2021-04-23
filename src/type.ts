export type History = boolean[]
export type BeforeGameHistory = Map<string, History>

export abstract class Strategy {
    abstract play (me: History, counterpart: History): boolean;
}

export interface ScoreBoard {
    name: String,
    score: number
}

export type PlayState = true | false;

export enum GameState {
    ALL_C,
    ALL_B,
    P1,
    P2
}
