import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  public proyectos : Proyectos[]=[];
  public editProyectos: Proyectos | undefined;
  

  constructor(private proyectosService : ProyectosService){ }

  ngOnInit(): void{
    this.getProyectos();
  }

  public getProyectos():void{
    this.proyectosService.getProyectos().subscribe({
      next:(Response: Proyectos[])=>{
        this.proyectos=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  

}

