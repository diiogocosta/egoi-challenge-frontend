import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTreeComponent } from './slide-tree.component';

describe('SlideTreeComponent', () => {
  let component: SlideTreeComponent;
  let fixture: ComponentFixture<SlideTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
