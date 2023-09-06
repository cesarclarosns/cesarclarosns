import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowTopRightIconComponent } from './arrow-top-right-icon.component';

describe('ArrowTopRightIconComponent', () => {
  let component: ArrowTopRightIconComponent;
  let fixture: ComponentFixture<ArrowTopRightIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArrowTopRightIconComponent]
    });
    fixture = TestBed.createComponent(ArrowTopRightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
