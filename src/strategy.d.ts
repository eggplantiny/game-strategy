export namespace Strategy {
    export interface Player {
        name: string;
        color: string;
        point: number;
    }

    export interface GameState {
        readonly currentGameHistory: boolean[];
    }
}
