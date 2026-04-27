import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacypolicePage } from './privacypolice.page';

describe('PrivacypolicePage', () => {
  let component: PrivacypolicePage;
  let fixture: ComponentFixture<PrivacypolicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacypolicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
