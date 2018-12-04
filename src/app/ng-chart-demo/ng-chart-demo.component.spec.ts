import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChartDemoComponent } from './ng-chart-demo.component';

describe('NgChartDemoComponent', () => {
  let component: NgChartDemoComponent;
  let fixture: ComponentFixture<NgChartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgChartDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
