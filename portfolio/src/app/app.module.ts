import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { LoginComponent } from './components/login/login.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { interceptorProvider } from './services/interceptor.service';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos/new-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    FooterComponent,
    BannerComponent,
    HomeComponent,
    LogoapComponent,
    EducacionComponent,
    LoginComponent,
    SkillsComponent,
    ProyectosComponent,
    ExperienciaComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    EditProyectosComponent,
    NewProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
