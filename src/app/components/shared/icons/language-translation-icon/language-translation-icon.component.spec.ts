import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageTranslationIconComponent } from './language-translation-icon.component';

describe('LanguageTranslationIconComponent', () => {
  let component: LanguageTranslationIconComponent;
  let fixture: ComponentFixture<LanguageTranslationIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LanguageTranslationIconComponent]
    });
    fixture = TestBed.createComponent(LanguageTranslationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
