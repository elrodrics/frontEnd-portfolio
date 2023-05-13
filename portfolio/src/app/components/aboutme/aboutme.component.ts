import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit{
  public editUsuario: Usuario | undefined;
  usuario: Usuario = {} as Usuario;
  public id: number = 1;

  constructor(private aboutmeService : AboutmeService, public usuarioService: UsuarioService){ }

  
    ngOnInit(): void {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      this.usuario = data;
    });
  }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      this.usuario = data;
    });
  }
}
