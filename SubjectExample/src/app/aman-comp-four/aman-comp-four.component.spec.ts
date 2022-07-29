import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmanCompFourComponent } from './aman-comp-four.component';

describe('AmanCompFourComponent', () => {
  let component: AmanCompFourComponent;
  let fixture: ComponentFixture<AmanCompFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmanCompFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmanCompFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
