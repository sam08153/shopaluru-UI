import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseHomeBeforeLoginComponent } from './base-home-before-login.component';

describe('BaseHomeBeforeLoginComponent', () => {
  let component: BaseHomeBeforeLoginComponent;
  let fixture: ComponentFixture<BaseHomeBeforeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseHomeBeforeLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseHomeBeforeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
