import {Player} from "./player";

export type History = boolean[]
export type PlayerName = string
export type BeforeGameHistory = Map<string, History>
export type PlayHistory = Map<PlayerName, GameHistory>

export abstract class Strategy {
    abstract play (gameHistory: GameHistory, counterpartName: PlayerName): boolean;
}

export interface GameHistory {
    myHistory: History,
    counterpartHistory: History
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
