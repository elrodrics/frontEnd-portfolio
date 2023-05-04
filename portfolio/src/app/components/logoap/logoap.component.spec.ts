import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoapComponent } from './logoap.component';

describe('LogoapComponent', () => {
  let component: LogoapComponent;
  let fixture: ComponentFixture<LogoapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoapComponent]
    });
    fixture = TestBed.createComponent(LogoapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
