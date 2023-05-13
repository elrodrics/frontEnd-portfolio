export class Proyectos{
    idProye?:number;
    tituloProye:String;
    subtituloProye:String;
    fechaProye:number;
    fechaFinProye:number;
    descProye:String;
    imagenProye:String;

    constructor(tituloProye: string, subtituloProye: string, fechaProye: number, fechaFinProye: number, descProye: string, imagenProye: string) {
        this.tituloProye = tituloProye;
        this.subtituloProye = subtituloProye;
        this.fechaProye = fechaProye;
        this.fechaFinProye = fechaFinProye;
        this.descProye = descProye;
        this.imagenProye = imagenProye;
    }
}