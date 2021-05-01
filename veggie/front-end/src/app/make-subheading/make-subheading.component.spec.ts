import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeSubheadingComponent } from './make-subheading.component';

describe('MakeSubheadingComponent', () => {
  let component: MakeSubheadingComponent;
  let fixture: ComponentFixture<MakeSubheadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeSubheadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeSubheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
