import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateforumComponent } from './createforum.component';

describe('CreateforumComponent', () => {
  let component: CreateforumComponent;
  let fixture: ComponentFixture<CreateforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
