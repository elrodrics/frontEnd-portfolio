export class Educacion{
    idEdu?:number;
    tituloEdu:String;
    subtituloEdu:String;
    fechaEdu:string;
    fechaFinEdu:string;
    descEdu:String;
    imagenEdu:String;

    constructor(tituloEdu: string, subtituloEdu: string, fechaEdu: string, fechaFinEdu: string, descEdu: string, imagenEdu: string) {
        this.tituloEdu = tituloEdu;
        this.subtituloEdu = subtituloEdu;
        this.fechaEdu = fechaEdu;
        this.fechaFinEdu = fechaFinEdu;
        this.descEdu = descEdu;
        this.imagenEdu = imagenEdu;
    }
}