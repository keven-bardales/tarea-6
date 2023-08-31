import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCharacterComponent } from './form-add-character.component';

describe('FormAddCharacterComponent', () => {
  let component: FormAddCharacterComponent;
  let fixture: ComponentFixture<FormAddCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddCharacterComponent]
    });
    fixture = TestBed.createComponent(FormAddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
