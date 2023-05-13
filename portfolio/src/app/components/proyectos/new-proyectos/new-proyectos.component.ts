import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent {
  // Creamos las variables que contendrán los datos del formulario
  tituloProye: string = '';
  subtituloProye: string = '';
  fechaProye: Date = new Date;
  descProye: string = '';

  constructor(private proyectosService: ProyectosService, private router: Router) { }

  onCreate(): void {
    const proye = new Proyectos(this.tituloProye, this.subtituloProye, this.fechaProye, this.descProye);
    this.proyectosService.addProyectos(proye).subscribe(
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

