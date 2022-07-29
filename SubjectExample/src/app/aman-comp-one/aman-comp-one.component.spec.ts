import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmanCompOneComponent } from './aman-comp-one.component';

describe('AmanCompOneComponent', () => {
  let component: AmanCompOneComponent;
  let fixture: ComponentFixture<AmanCompOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmanCompOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmanCompOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
