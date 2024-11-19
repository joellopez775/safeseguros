import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarfichaPage } from './agregarficha.page';

describe('AgregarfichaPage', () => {
  let component: AgregarfichaPage;
  let fixture: ComponentFixture<AgregarfichaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarfichaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
