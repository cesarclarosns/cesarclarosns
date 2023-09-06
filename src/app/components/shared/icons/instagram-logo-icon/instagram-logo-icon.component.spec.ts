import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramLogoIconComponent } from './instagram-logo-icon.component';

describe('InstagramLogoIconComponent', () => {
  let component: InstagramLogoIconComponent;
  let fixture: ComponentFixture<InstagramLogoIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InstagramLogoIconComponent]
    });
    fixture = TestBed.createComponent(InstagramLogoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
