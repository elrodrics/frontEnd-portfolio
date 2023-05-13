import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent{
  public educaciones : Educacion[]=[];
  
  isLogged:boolean = false;

  constructor(private educacionService : EducacionService, private tokenService: TokenService){ }


  ngOnInit(): void{
    this.getEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getEducacion():void{
    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[])=>{
        this.educaciones=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  delete(idEdu?: number){
    if(idEdu != undefined){
      this.educacionService.deleteEducacion(idEdu).subscribe(
        data => {
          this.getEducacion();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
