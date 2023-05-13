export class Experiencia{
    idExp?:number;
    tituloExp:string;
    subtituloExp:string;
    fechaExp:number;
    fechaFinExp: number;
    descExp:string;
    imagenExp:string;

    constructor(tituloExp: string, subtituloExp: string, fechaExp: number, fechaFinExp: number, descExp: string, imagenExp: string) {
        this.tituloExp = tituloExp;
        this.subtituloExp = subtituloExp;
        this.fechaExp = fechaExp;
        this.fechaFinExp = fechaFinExp;
        this.descExp = descExp;
        this.imagenExp = imagenExp;
    }
}