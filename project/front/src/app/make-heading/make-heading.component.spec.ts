import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeHeadingComponent } from './make-heading.component';

describe('MakeHeadingComponent', () => {
  let component: MakeHeadingComponent;
  let fixture: ComponentFixture<MakeHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
