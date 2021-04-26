import { Strategy, ScoreBoard, PlayHistory, PlayerName, GameHistory, GameReport } from "../type"

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
        return !this._playHistory.has(counterpart.name)
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

    public printHistory (counterpart: Player): void {
        const { myHistory, counterpartHistory } = this.getGameHistory(counterpart)
        const myHistoryString = myHistory.map(state => state ? 'O' : 'X').join(' ')
        const counterpartHistoryString = counterpartHistory.map(state => state ? 'O' : 'X').join(' ')

        console.log(`${this.name} vs ${counterpart.name}\n[${this.name}] - [${myHistoryString}]\n[${counterpart.name}] - [${counterpartHistoryString}]`)
    }

    public exportHistory (counterpart: Player): GameReport {
        const { myHistory, counterpartHistory } = this.getGameHistory(counterpart)
        return {
            Me: {
                History: myHistory,
                Name: this.name,
                Strategy: this._strategy.name
            },
            Counterpart: {
                History: counterpartHistory,
                Name: counterpart.name,
                Strategy: counterpart._strategy.name
            }
        }
    }

    public play (counterpart: Player): boolean {
        if (this.isFirstMeet(counterpart)) {
            this.initPlayHistory(counterpart)
        }

        const gameHistory: GameHistory = this.getGameHistory(counterpart)
        const state = this._strategy.play(gameHistory, counterpart.name)

        return state
    }

    public saveGameHistory (counterpart: Player, myState: boolean, counterpartState: boolean) {
        const gameHistory = this.getGameHistory(counterpart)

        gameHistory.myHistory.push(myState)
        gameHistory.counterpartHistory.push(counterpartState)
    }
}

