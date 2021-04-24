import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadingDetailComponent } from './subheading-detail.component';

describe('SubheadingDetailsComponent', () => {
  let component: SubheadingDetailComponent;
  let fixture: ComponentFixture<SubheadingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheadingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheadingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
