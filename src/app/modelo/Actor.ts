import { Sexo } from './Sexo';

export class Actor {

    constructor(private _id: number,
        private _nombre: string,
        private _apellido: string,
        private _sexo: Sexo,
        private _fechaDeNacimiento: Date,
        private _foto: string,
        private _paisDeOrigen?: string) { }

    public get foto(): string {
        return this._foto;
    }
    public set foto(value: string) {
        this._foto = value;
    }
    public get fechaDeNacimiento(): Date {
        return this._fechaDeNacimiento;
    }
    public set fechaDeNacimiento(value: Date) {
        this._fechaDeNacimiento = value;
    }
    public get sexo(): Sexo {
        return this._sexo;
    }
    public set sexo(value: Sexo) {
        this._sexo = value;
    }
    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get paisDeOrigen(): string {
        return this._paisDeOrigen;
    }
    public set paisDeOrigen(value: string) {
        this._paisDeOrigen = value;
    }

}
