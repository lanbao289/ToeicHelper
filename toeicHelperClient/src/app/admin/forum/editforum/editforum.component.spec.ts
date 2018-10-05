import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditforumComponent } from './editforum.component';

describe('EditforumComponent', () => {
  let component: EditforumComponent;
  let fixture: ComponentFixture<EditforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
