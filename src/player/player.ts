import { Strategy, History, ScoreBoard, BeforeGameHistory } from "../type"

export class  Player {
    private _color: string
    private _strategy: Strategy
    private _score: number
    private _name: string
    private _currentGameHistory: History
    private _beforeGameHistory: BeforeGameHistory

    constructor (strategy: Strategy, name: string, color: string) {
        this._strategy = strategy
        this._name = name
        this._color = color
        this._score = 0
        this._currentGameHistory = []
        this._beforeGameHistory = new Map <string, History> ()
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

    public get currentGameHistory () {
        return this._currentGameHistory
    }

    public set currentGameHistory (history: History) {
        this._currentGameHistory = history
    }

    private pushCurrentHistory (value: boolean): void {
        this._currentGameHistory.push(value)
    }

    private clearCurrentHistory (): void {
        this._currentGameHistory.splice(0, this._currentGameHistory.length)
    }

    public getBeforeGameHistory (playerName: string): History {
        const beforeGameHistory = this._beforeGameHistory

        if (!beforeGameHistory.has(playerName)) {
            throw new Error(`Can't find playerName ${playerName}.`)
        }

        return beforeGameHistory.get(playerName)!
    }

    public setBeforeGameHistory (playerName: string, history: History) {
        const beforeGameHistory = this._beforeGameHistory

        if (!beforeGameHistory.has(playerName)) {
            throw new Error(`Can't find playerName ${playerName}.`)
        }

        beforeGameHistory.set(playerName, history)
    }

    public play (counterpart: Player): boolean {
        const myState = this._strategy.play(this._currentGameHistory, counterpart.currentGameHistory)
        this.pushCurrentHistory(myState)

        return myState
    }
}

