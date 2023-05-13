export class Skill {
    id!: number;
    nombre: string;
    porcentaje: number;
    imagenSkill: string;

    constructor(nombre:string, porcentaje: number, imagenSkill: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.imagenSkill = imagenSkill;
    }
}
