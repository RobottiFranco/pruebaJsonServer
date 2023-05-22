import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteinUserComponent } from './contein-user.component';

describe('ConteinUserComponent', () => {
  let component: ConteinUserComponent;
  let fixture: ComponentFixture<ConteinUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteinUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteinUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
