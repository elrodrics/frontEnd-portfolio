import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'login', component: LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'editexp/:idExp', component: EditExperienciaComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editedu/:idEdu', component: EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
