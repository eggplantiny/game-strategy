
export type History = boolean[]

export abstract class Strategy {
    abstract play (me: History, counterpart: History): boolean;
}

export type PlayState = true | false;

export enum GameState {
    ALL_C,
    ALL_B,
    P1,
    P2
}
