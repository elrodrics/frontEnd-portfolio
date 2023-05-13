import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent{
   // Creamos las variables que contendrán los datos del formulario
   tituloEdu: string = '';
   subtituloEdu: string = '';
   fechaEdu: number = 0;
   fechaFinEdu: number = 0;
   descEdu: string = '';
   imagenEdu: string = '';
 
   constructor(private educacionService: EducacionService, private router: Router) { }
 
   onCreate(): void {
     const expe = new Educacion(this.tituloEdu, this.subtituloEdu, this.fechaEdu, this.fechaFinEdu, this.descEdu, this.imagenEdu);
     this.educacionService.addEducacion(expe).subscribe(
       data => {
         alert("Experiencia añadida");
         this.router.navigate(['/home']);
       }, err => {
         alert("Falló");
         this.router.navigate(['/home']);
       }
     )
   }
 }