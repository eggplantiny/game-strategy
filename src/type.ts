export type History = boolean[]
export type PlayerName = string
export type StrategyName = string
export type BeforeGameHistory = Map<string, History>
export type PlayHistory = Map<PlayerName, GameHistory>

export abstract class Strategy {
    private readonly _name: StrategyName;
    protected constructor (name: StrategyName) {
        this._name = name;
    }

    abstract play (gameHistory: GameHistory, counterpartName: PlayerName): boolean;
    public get name () {
        return this._name;
    }
}

export interface GameReport {
    Me: {
        Name: PlayerName,
        Strategy: StrategyName,
        History: History
    },
    Counterpart: {
        Name: PlayerName,
        Strategy: StrategyName,
        History: History
    }
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
