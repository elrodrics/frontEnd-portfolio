import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProyectosComponent } from './edit-proyectos.component';

describe('EditProyectosComponent', () => {
  let component: EditProyectosComponent;
  let fixture: ComponentFixture<EditProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProyectosComponent]
    });
    fixture = TestBed.createComponent(EditProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
