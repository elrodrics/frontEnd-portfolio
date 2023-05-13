import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent {

  educa: Educacion = {} as Educacion;

  constructor(private activatedRouter: ActivatedRoute,
    private router: Router, private educacionService: EducacionService,) { }
  
    ngOnInit(): void {
      const idEdu = this.activatedRouter.snapshot.params['idEdu'];
      this.educacionService.getEducacionId(idEdu).subscribe(
        data =>{
          this.educa = data;
        }, err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const idEdu = this.activatedRouter.snapshot.params['idEdu'];
      console.log("Educacion a actualizar:", this.educa);
      this.educacionService.updateEducacion(idEdu, this.educa).subscribe(
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

