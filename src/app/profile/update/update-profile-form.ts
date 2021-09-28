import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileFormComponent } from './update-profile-form.component';

describe('UpdateComponent', () => {
  let component: UpdateProfileFormComponent;
  let fixture: ComponentFixture<UpdateProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfileFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
