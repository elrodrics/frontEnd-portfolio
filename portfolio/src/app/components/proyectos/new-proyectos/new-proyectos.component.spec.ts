import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProyectosComponent } from './new-proyectos.component';

describe('NewProyectosComponent', () => {
  let component: NewProyectosComponent;
  let fixture: ComponentFixture<NewProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProyectosComponent]
    });
    fixture = TestBed.createComponent(NewProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
