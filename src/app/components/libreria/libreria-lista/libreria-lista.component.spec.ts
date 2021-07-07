import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaListaComponent } from './libreria-lista.component';

describe('LibreriaListaComponent', () => {
  let component: LibreriaListaComponent;
  let fixture: ComponentFixture<LibreriaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibreriaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibreriaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
