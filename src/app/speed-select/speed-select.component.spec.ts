import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedSelectComponent } from './speed-select.component';

describe('SpeedSelectComponent', () => {
  let component: SpeedSelectComponent;
  let fixture: ComponentFixture<SpeedSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
