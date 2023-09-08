import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGastroComponent } from './lista-gastro.component';

describe('ListaGastroComponent', () => {
  let component: ListaGastroComponent;
  let fixture: ComponentFixture<ListaGastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaGastroComponent]
    });
    fixture = TestBed.createComponent(ListaGastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
