import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  public experiencias : Experiencia[]=[];
  public editExperiencia: Experiencia | undefined;
  

  constructor(private experienciaService : ExperienciaService){ }

  ngOnInit(): void{
    this.getExperiencias();
  }

  public getExperiencias():void{
    this.experienciaService.getExperiencia().subscribe({
      next:(Response: Experiencia[])=>{
        this.experiencias=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
