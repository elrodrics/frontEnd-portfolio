import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  public experiencias : Experiencia[]=[];
  
  isLogged:boolean = false;

  constructor(private experienciaService : ExperienciaService, private tokenService: TokenService){ }


  ngOnInit(): void{
    this.getExperiencias();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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

  delete(idExp?: number){
    if(idExp != undefined){
      this.experienciaService.deleteExperiencia(idExp).subscribe(
        data => {
          this.getExperiencias();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
