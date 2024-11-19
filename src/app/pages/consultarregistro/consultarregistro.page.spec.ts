import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarregistroPage } from './consultarregistro.page';

describe('ConsultarregistroPage', () => {
  let component: ConsultarregistroPage;
  let fixture: ComponentFixture<ConsultarregistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarregistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
