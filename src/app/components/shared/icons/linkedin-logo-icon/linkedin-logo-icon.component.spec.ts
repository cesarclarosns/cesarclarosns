import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinLogoIconComponent } from './linkedin-logo-icon.component';

describe('LinkedinLogoIconComponent', () => {
  let component: LinkedinLogoIconComponent;
  let fixture: ComponentFixture<LinkedinLogoIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LinkedinLogoIconComponent]
    });
    fixture = TestBed.createComponent(LinkedinLogoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
