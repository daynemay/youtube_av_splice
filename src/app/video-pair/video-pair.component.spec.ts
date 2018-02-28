import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPairComponent } from './video-pair.component';

describe('VideoPairComponent', () => {
  let component: VideoPairComponent;
  let fixture: ComponentFixture<VideoPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
