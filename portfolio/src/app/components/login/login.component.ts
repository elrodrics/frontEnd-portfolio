import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticationService:AutenticationService, private ruta:Router){
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]],
        })
      }

      get Email(){
        return this.form.get('email');
      }

      get Password(){
        return this.form.get('password');
      }

      onEnviar(event:Event){
        event.preventDefault;
        this.autenticationService.IniciarSesion(this.form.value).subscribe(data=>{
          console.log("DATA:" + JSON.stringify(data));
          this.ruta.navigate(['/portfolio']);
        })
      }
  }


