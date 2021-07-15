import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowLoopComponent } from './flow-loop.component';

describe('FlowLoopComponent', () => {
  let component: FlowLoopComponent;
  let fixture: ComponentFixture<FlowLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
