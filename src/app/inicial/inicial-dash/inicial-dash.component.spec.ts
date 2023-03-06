import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialDashComponent } from './inicial-dash.component';

describe('InicialDashComponent', () => {
  let component: InicialDashComponent;
  let fixture: ComponentFixture<InicialDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
