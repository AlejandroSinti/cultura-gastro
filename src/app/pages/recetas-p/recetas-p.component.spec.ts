import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasPComponent } from './recetas-p.component';

describe('RecetasPComponent', () => {
  let component: RecetasPComponent;
  let fixture: ComponentFixture<RecetasPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetasPComponent]
    });
    fixture = TestBed.createComponent(RecetasPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
