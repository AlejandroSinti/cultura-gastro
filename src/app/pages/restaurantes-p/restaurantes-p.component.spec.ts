import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantesPComponent } from './restaurantes-p.component';

describe('RestaurantesPComponent', () => {
  let component: RestaurantesPComponent;
  let fixture: ComponentFixture<RestaurantesPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantesPComponent]
    });
    fixture = TestBed.createComponent(RestaurantesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
