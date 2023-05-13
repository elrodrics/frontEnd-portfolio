import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = {} as Experiencia;
  
  constructor(private sExperiencia: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const idExp = this.activatedRouter.snapshot.params['idExp'];
    this.sExperiencia.getExperienciaId(idExp).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const idExp = this.activatedRouter.snapshot.params['idExp'];
    console.log("Experiencia a actualizar:", this.expLab);
    this.sExperiencia.updateExperiencia(idExp, this.expLab).subscribe(
      data => {
        console.log("Respuesta del servidor:", data);
        this.router.navigate(['/home']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }
  

  cancelar(): void{
    this.router.navigate(['/home']);
  }
}

