export class Player {
    private _color: string;

    constructor (color: string) {
        this._color = color;
    }

    public get color() {
        return this._color;
    }

    public set color (color: string) {
        this._color = color;
    }
}

