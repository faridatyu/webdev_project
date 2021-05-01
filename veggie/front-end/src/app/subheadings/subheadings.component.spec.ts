import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadingsComponent } from './subheadings.component';

describe('SubheadingsComponent', () => {
  let component: SubheadingsComponent;
  let fixture: ComponentFixture<SubheadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
