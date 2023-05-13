import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit{
  usuario: Usuario = {} as Usuario;
  public id: number = 1;
  isLogged:boolean = false;


  constructor(private aboutmeService : AboutmeService, public usuarioService: UsuarioService, private tokenService: TokenService){ }

  
    ngOnInit(): void {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      this.usuario = data;
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      this.usuario = data;
    });
  }

}
