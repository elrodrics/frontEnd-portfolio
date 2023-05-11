import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserUsuario } from 'src/app/model/login-user-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUserUsuario!: LoginUserUsuario;
  nombreUserUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUserUsuario = new LoginUserUsuario(this.nombreUserUsuario, this.password); 
    this.authService.login(this.loginUserUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUserUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['/home'])
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      if (err && err.error && err.error.mensaje) {
        this.errMsj = "Ha ocurrido un error durante el inicio de sesión: " + err.error.mensaje;
      } else {
        this.errMsj = "Ha ocurrido un error desconocido durante el inicio de sesión.";
      }
      console.log(this.errMsj);
    })
  }
  

}
