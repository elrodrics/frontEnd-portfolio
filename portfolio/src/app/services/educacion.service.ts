import { Injectable } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl=environment.apiBaseURL;
  constructor(private http: HttpClient){ }

  public getEducacion():Observable<Educacion[]>{
     return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/all`);
  }

  public addEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/create`, educacion);
  }

  public getEducacionId(idEdu:number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.apiServerUrl}/educacion/detail/${idEdu}`);
  }

  public updateEducacion(idEdu:number, educacion: Educacion):Observable<Educacion>{
    console.log("Educacion enviada al servidor:", educacion);
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/update/${idEdu}`, educacion);
  }

  public deleteEducacion(idEdu: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/delete/${idEdu}`);
  }

}