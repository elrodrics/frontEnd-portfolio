import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  // Creamos las variables que contendrán los datos del formulario
  tituloExp: string = '';
  subtituloExp: string = '';
  fechaExp: Date = new Date;
  fechaFinExp: Date = new Date;
  descExp: string = '';
  imagenExp: string = '';

  constructor(private experienciaervice: ExperienciaService, private router: Router) { }

  onCreate(): void {
    const expe = new Experiencia(this.tituloExp, this.subtituloExp, this.fechaExp, this.fechaFinExp, this.descExp, this.imagenExp);
    this.experienciaervice.addExperiencia(expe).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['/home']);
      }, err => {
        alert("Falló");
        this.router.navigate(['/home']);
      }
    )
  }

  cancelar(): void{
   this.router.navigate(['/home']);
 }
}
