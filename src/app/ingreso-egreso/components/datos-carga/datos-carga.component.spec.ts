import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosCargaComponent } from './datos-carga.component';

describe('DatosCargaComponent', () => {
  let component: DatosCargaComponent;
  let fixture: ComponentFixture<DatosCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
