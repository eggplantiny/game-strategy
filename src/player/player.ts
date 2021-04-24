import { Strategy, History, ScoreBoard, BeforeGameHistory, PlayHistory, PlayerName, GameHistory } from "../type"

export class  Player {
    private _color: string
    private _strategy: Strategy
    private _score: number
    private _name: PlayerName
    private _playHistory: PlayHistory

    constructor (strategy: Strategy, name: string, color: string) {
        this._strategy = strategy
        this._name = name
        this._color = color
        this._score = 0
        this._playHistory = new Map <PlayerName, GameHistory> ()
    }

    public getScoreBoard (): ScoreBoard {
        const { _name, _score } = this
        return {
            name: _name,
            score: _score
        }
    }

    public get color () {
        return this._color
    }

    public set color (color: string) {
        this._color = color
    }

    public set score (value: number) {
        this._score = value
    }

    public get score () {
        return this._score
    }

    public get name () {
        return this._name
    }

    private isFirstMeet (counterpart: Player): boolean {
        return this._playHistory.has(counterpart.name)
    }

    private initPlayHistory (counterpart: Player) {
        const playHistory: GameHistory = {
            myHistory: [],
            counterpartHistory: []
        }

        this._playHistory.set(counterpart.name, playHistory)
    }

    private getGameHistory (counterpart: Player): GameHistory {
        return this._playHistory.get(counterpart.name)!
    }

    public play (counterpart: Player): boolean {
        if (this.isFirstMeet(counterpart)) {
            this.initPlayHistory(counterpart)
        }

        const gameHistory: GameHistory = this.getGameHistory(counterpart)
        const state = this._strategy.play(gameHistory)

        return state
    }

    public saveGameHistory (counterpart: Player, myState: boolean, counterpartState: boolean) {
        const gameHistory = this.getGameHistory(counterpart)

        gameHistory.myHistory.push(myState)
        gameHistory.counterpartHistory.push(counterpartState)
    }
}

