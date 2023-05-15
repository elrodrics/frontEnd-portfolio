export class Educacion{
    idEdu?:number;
    tituloEdu:String;
    subtituloEdu:String;
    fechaEdu:Date;
    fechaFinEdu:Date;
    descEdu:String;
    imagenEdu:String;

    constructor(tituloEdu: string, subtituloEdu: string, fechaEdu: Date, fechaFinEdu: Date, descEdu: string, imagenEdu: string) {
        this.tituloEdu = tituloEdu;
        this.subtituloEdu = subtituloEdu;
        this.fechaEdu = fechaEdu;
        this.fechaFinEdu = fechaFinEdu;
        this.descEdu = descEdu;
        this.imagenEdu = imagenEdu;
    }
}