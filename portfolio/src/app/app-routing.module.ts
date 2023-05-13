import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos/new-proyectos.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme/edit-aboutme.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'login', component: LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'editexp/:idExp', component: EditExperienciaComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editedu/:idEdu', component: EditEducacionComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editproye/:idProye',  component: EditProyectosComponent},
  {path: 'nuevoproye', component: NewProyectosComponent},
  {path: 'editskills/:id', component: EditSkillsComponent},
  {path: 'nuevaskill', component: NewSkillsComponent},
  {path: 'editaboutme/:id', component: EditAboutmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
