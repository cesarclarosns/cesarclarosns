import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubLogoIconComponent } from './github-logo-icon.component';

describe('GithubLogoIconComponent', () => {
  let component: GithubLogoIconComponent;
  let fixture: ComponentFixture<GithubLogoIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GithubLogoIconComponent]
    });
    fixture = TestBed.createComponent(GithubLogoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
