import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadingDetailsComponent } from './subheading-details.component';

describe('SubheadingDetailsComponent', () => {
  let component: SubheadingDetailsComponent;
  let fixture: ComponentFixture<SubheadingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheadingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheadingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
