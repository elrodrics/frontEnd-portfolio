import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent {
  proye: Proyectos = {} as Proyectos;

  constructor(private activatedRouter: ActivatedRoute,
    private router: Router, private proyectosService: ProyectosService,) { }
  
    ngOnInit(): void {
      const idProye = this.activatedRouter.snapshot.params['idProye'];
      this.proyectosService.getProyectosId(idProye).subscribe(
        data =>{
          this.proye = data;
        }, err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const idProye = this.activatedRouter.snapshot.params['idProye'];
      console.log("Educacion a actualizar:", this.proye);
      this.proyectosService.updateProyectos(idProye, this.proye).subscribe(
        data => {
          console.log("Respuesta del servidor:", data);
          this.router.navigate(['/home']);
        }, err =>{
           alert("Error al modificar experiencia");
           this.router.navigate(['/home']);
        }
      )
    }
    
  
  cancelar(): void{
    this.router.navigate(['/home']);
  }
}
