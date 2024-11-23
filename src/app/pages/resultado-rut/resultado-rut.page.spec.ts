import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoRutPage } from './resultado-rut.page';

describe('ResultadoRutPage', () => {
  let component: ResultadoRutPage;
  let fixture: ComponentFixture<ResultadoRutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoRutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
