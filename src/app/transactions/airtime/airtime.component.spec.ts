import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimeComponent } from './airtime.component';

describe('AirtimeComponent', () => {
  let component: AirtimeComponent;
  let fixture: ComponentFixture<AirtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirtimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
