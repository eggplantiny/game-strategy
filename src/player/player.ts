import { Strategy } from "../type";

export class Player {
    private _color: string;
    private _strategy: Strategy;
    private _score: number;
    private _name: string;

    constructor (strategy: Strategy, name: string, color: string) {
        this._strategy = strategy;
        this._name = name;
        this._color = color;
        this._score = 0;
    }

    public get color () {
        return this._color;
    }

    public set color (color: string) {
        this._color = color;
    }

    public set score (value: number) {
        this._score += value;
    }

    public get score () {
        return this._score;
    }
}

