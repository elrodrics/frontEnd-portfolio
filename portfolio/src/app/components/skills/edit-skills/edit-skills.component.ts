import { Component, OnInit } from '@angular/core';
import { SkillsComponent } from '../skills.component';
import { SkillsService } from 'src/app/services/skills.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skill: Skill = {} as Skill;

  constructor(
    private skillS: SkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['/home']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

  cancelar(): void{
    this.router.navigate(['/home']);
  }
}