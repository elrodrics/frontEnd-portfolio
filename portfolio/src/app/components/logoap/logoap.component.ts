import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoap',
  templateUrl: './logoap.component.html',
  styleUrls: ['./logoap.component.css']
})
export class LogoapComponent {
  constructor(private router:Router){ }
  
  login(){
    this.router.navigate(['/login'])
  }
}
