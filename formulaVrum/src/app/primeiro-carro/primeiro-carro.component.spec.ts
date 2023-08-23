import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroCarroComponent } from './primeiro-carro.component';

describe('PrimeiroCarroComponent', () => {
  let component: PrimeiroCarroComponent;
  let fixture: ComponentFixture<PrimeiroCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroCarroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
