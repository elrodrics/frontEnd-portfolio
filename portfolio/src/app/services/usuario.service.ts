import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiServerUrl=environment.apiBaseURL;
  constructor(private http: HttpClient) { }

  public getUsuario(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/${id}`);
  }
}
