import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { AboutmeService } from 'src/app/services/aboutme.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit{
  public editUsuario: Usuario | undefined;
  public usuario : Usuario | undefined;

  constructor(private aboutmeService : AboutmeService){ }

  ngOnInit(): void{
    this.getUser();
  }

  public getUser():void{
    this.aboutmeService.getUser().subscribe({
      next:(Response: Usuario)=>{
        this.usuario=Response;
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
