import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleThemeComponent } from './single-theme.component';

describe('SingleThemeComponent', () => {
  let component: SingleThemeComponent;
  let fixture: ComponentFixture<SingleThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
