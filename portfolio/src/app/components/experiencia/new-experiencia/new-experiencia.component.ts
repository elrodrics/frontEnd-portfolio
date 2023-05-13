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
  fechaExp: number = 0;
  fechaFinExp: number= 0;
  descExp: string = '';
  imagenExp: string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  onCreate(): void {
    const expe = new Experiencia(this.tituloExp, this.subtituloExp, this.fechaExp, this.fechaFinExp, this.descExp, this.imagenExp);
    this.experienciaService.addExperiencia(expe).subscribe(
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