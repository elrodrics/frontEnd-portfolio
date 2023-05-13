import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiServerUrl=environment.apiBaseURL;
  constructor(private http: HttpClient){ }

  public getProyectos():Observable<Proyectos[]>{
     return this.http.get<Proyectos[]>(`${this.apiServerUrl}/proyectos/all`);
  }

  public addProyectos(proyectos: Proyectos):Observable<Proyectos>{
    return this.http.post<Proyectos>(`${this.apiServerUrl}/proyectos/create`, proyectos);
  }

  public getProyectosId(idProye:number):Observable<Proyectos>{
    return this.http.get<Proyectos>(`${this.apiServerUrl}/proyectos/detail/${idProye}`);
  }

  public updateProyectos(idEdu:number, proyectos: Proyectos):Observable<Proyectos>{
    console.log("Proyectos enviada al servidor:", proyectos);
    return this.http.put<Proyectos>(`${this.apiServerUrl}/proyectos/update/${idEdu}`, proyectos);
  }

  public deleteProyectos(idEdu: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/proyectos/delete/${idEdu}`);
  }

}
