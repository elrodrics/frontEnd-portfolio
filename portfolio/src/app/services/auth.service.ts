import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUserUsuario } from '../model/nuevo-user-usuario';
import { Observable } from 'rxjs';
import { LoginUserUsuario } from '../model/login-user-usuario';
import { JwtDto } from '../model/jwt-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.apiBaseURL + '/auth/'

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUserUsuario: NuevoUserUsuario): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUserUsuario);
  }

  public login(LoginUserUsuario: LoginUserUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login', LoginUserUsuario);
  }
}
