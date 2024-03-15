import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStylesComponent } from './angular-styles.component';

describe('AngularStylesComponent', () => {
  let component: AngularStylesComponent;
  let fixture: ComponentFixture<AngularStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularStylesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
