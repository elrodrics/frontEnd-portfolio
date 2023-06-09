import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl=environment.apiBaseURL;
  constructor(private http: HttpClient){ }

  public getExperiencia():Observable<Experiencia[]>{
     return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/all`);
  }

  public addExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/create`, experiencia);
  }

  public getExperienciaId(idExp:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.apiServerUrl}/experiencia/detail/${idExp}`);
  }

  public updateExperiencia(idExp:number, experiencia: Experiencia):Observable<Experiencia>{
    console.log("Experiencia enviada al servidor:", experiencia);
    return this.http.put<Experiencia>(`${this.apiServerUrl}/experiencia/update/${idExp}`, experiencia);
  }

  public deleteExperiencia(idExp: number): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/experiencia/delete/${idExp}`).pipe(
      catchError(error => {
        console.log('Error eliminando experiencia:', error);
        return throwError('Ha ocurrido un error al eliminar la experiencia.');
      })
    );
  }

}
