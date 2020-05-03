import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatctpageComponent } from './conatctpage.component';

describe('ConatctpageComponent', () => {
  let component: ConatctpageComponent;
  let fixture: ComponentFixture<ConatctpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConatctpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatctpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
