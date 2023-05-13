import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent {
  nombre: string  = '';
  porcentaje: number = 0;
  imagenSkill: string= '';

  constructor(private skillS: SkillsService, private router: Router) { }


  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje, this.imagenSkill);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['/home']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['/home']);
      }
    )
  }

  cancelar(): void{
    this.router.navigate(['/home']);
  }
}