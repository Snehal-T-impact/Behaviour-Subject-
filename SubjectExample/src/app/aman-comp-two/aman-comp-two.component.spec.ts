import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmanCompTwoComponent } from './aman-comp-two.component';

describe('AmanCompTwoComponent', () => {
  let component: AmanCompTwoComponent;
  let fixture: ComponentFixture<AmanCompTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmanCompTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmanCompTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
