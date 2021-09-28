import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2WindowsComponent } from './v2-windows.component';

describe('V2WindowsComponent', () => {
  let component: V2WindowsComponent;
  let fixture: ComponentFixture<V2WindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2WindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V2WindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
