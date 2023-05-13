import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit{

  usuario: Usuario= {} as Usuario

  constructor(private usuarioService : UsuarioService, aboutmeService: AboutmeService, private tokenService: TokenService, private activatedRouter: ActivatedRoute,
    private router: Router){ }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.usuarioService.getUsuario(id).subscribe(
        data =>{
          this.usuario = data;
        }, err =>{
          alert("Error al modificar usuario");
          this.router.navigate(['/home']);
        }
      )
    }

    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      console.log("Usuario a actualizar:", this.usuario);
      this.usuarioService.updateUsuario(id, this.usuario).subscribe(
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
