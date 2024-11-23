import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarRegistroPage } from './consultarregistro.page';

describe('ConsultarRegistroPage', () => {
  let component: ConsultarRegistroPage;
  let fixture: ComponentFixture<ConsultarRegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
