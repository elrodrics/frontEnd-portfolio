export class Proyectos{
    idProye?:number;
    tituloProye:String;
    subtituloProye:String;
    fechaProye:Date;
    descProye:String;

    constructor(tituloProye: string, subtituloProye: string, fechaProye: Date, descProye: string) {
        this.tituloProye = tituloProye;
        this.subtituloProye = subtituloProye;
        this.fechaProye = fechaProye;
        this.descProye = descProye;
    }
}