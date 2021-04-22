import Player from '../player'
import { GameState, ScoreBoard } from "../type";
import {combinations} from "../utils/array";

export class Game {

    private _gameSize: number;
    private _p1: Player;
    private _p2: Player;

    constructor (p1: Player, p2: Player, gameSize: number = 10) {
        this._p1 = p1;
        this._p2 = p2;
        this._gameSize = gameSize;
    }

    public play (): void {
        const gameSize = this._gameSize

        const p1: Player = this._p1
        const p2: Player = this._p2

        for (let c = 0; c < gameSize; c++) {
            this.playTurn(p1, p2)
        }
    }

    public getScore (): ScoreBoard[] {
        const p1: Player = this._p1
        const p2: Player = this._p2

        const p1ScoreBoard: ScoreBoard = p1.getScoreBoard()
        const p2ScoreBoard: ScoreBoard = p2.getScoreBoard()

        return [p1ScoreBoard, p2ScoreBoard]
    }

    private playTurn (p1: Player, p2: Player): void {
        const gameState = this.rollDice(p1, p2)
        this.calculateScore(p1, p2, gameState)
    }


    private rollDice (p1: Player, p2: Player): GameState {
        const s1 = p1.play(p2)
        const s2 = p2.play(p1)

        if (s1 === s2) {
            return s1 === true ? GameState.ALL_C : GameState.ALL_B
        }

        return s1 === true ? GameState.P2 : GameState.P1
    }

    private calculateScore (p1: Player, p2: Player, gameState: GameState): void {

        const allCooperate = 3;
        const allBetray = 1;
        const win = 5;
        const loose = 0;

        if (gameState === GameState.ALL_C) {
            p1.score += allCooperate
            p2.score += allCooperate
        }
        else if (gameState === GameState.ALL_B) {
            p1.score += allBetray
            p2.score += allBetray
        }
        else if (gameState === GameState.P1) {
            p1.score += win;
            p2.score += loose;
        }
        else if (gameState === GameState.P2) {
            p1.score += loose;
            p2.score += win
        }
    }
}

export class GameManager {
    private readonly _participantList: Array<Player>;
    private readonly _gameSize: number;
    private _retrySize: number;

    constructor (_retrySize: number = 5, gameSize: number = 20) {
        this._retrySize = _retrySize;
        this._gameSize = gameSize;
        this._participantList = [];
    }

    public addParticipant (player: Player): void {
        this._participantList.push(player);
    }

    public playGame (): void {
        const gameSize = this._gameSize;
        const participantList = this._participantList;

        for (const [p1, p2] of combinations<Player>(participantList, 2)) {
            const game = new Game(p1, p2, gameSize)
            game.play()
        }
    }

    public getScores (): Array <ScoreBoard> {
        const participantList = this._participantList;

        return participantList.map((player: Player) => {
            const scoreBoard: ScoreBoard = {
                name: player.name,
                score: player.score
            };

            return scoreBoard;
        }).sort((p1, p2) => p1.score > p2.score ? -1 : 1)
    }

    public winnerIs (): Player {
        const participantList = this._participantList;
        return participantList.sort((p1, p2) => p1.score > p2.score ? -1 : 1)[0]
    }
}
