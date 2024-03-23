import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthrawComponent } from './widthraw.component';

describe('WidthrawComponent', () => {
  let component: WidthrawComponent;
  let fixture: ComponentFixture<WidthrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidthrawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidthrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
