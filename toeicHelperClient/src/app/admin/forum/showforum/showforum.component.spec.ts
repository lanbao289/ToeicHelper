import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowforumComponent } from './showforum.component';

describe('ShowforumComponent', () => {
  let component: ShowforumComponent;
  let fixture: ComponentFixture<ShowforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
