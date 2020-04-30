import { TipoPelicula } from './TipoPelicula';
export class Pelicula {

    constructor(private _id: Number, private _nombre: string, private _tipo: TipoPelicula, private _fechaDeEstreno: Date, private _cantidadDePublico: number, private _foto: string) {

    }

    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }

    public get foto(): string {
        return this._foto;
    }
    public set foto(value: string) {
        this._foto = value;
    }
    public get cantidadDePublico(): number {
        return this._cantidadDePublico;
    }
    public set cantidadDePublico(value: number) {
        this._cantidadDePublico = value;
    }
    public get fechaDeEstreno(): Date {
        return this._fechaDeEstreno;
    }
    public set fechaDeEstreno(value: Date) {
        this._fechaDeEstreno = value;
    }
    public get tipo(): TipoPelicula {
        return this._tipo;
    }
    public set tipo(value: TipoPelicula) {
        this._tipo = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
}
