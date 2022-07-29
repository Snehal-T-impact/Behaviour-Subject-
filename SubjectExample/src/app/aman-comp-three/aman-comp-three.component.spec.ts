import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmanCompThreeComponent } from './aman-comp-three.component';

describe('AmanCompThreeComponent', () => {
  let component: AmanCompThreeComponent;
  let fixture: ComponentFixture<AmanCompThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmanCompThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmanCompThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
