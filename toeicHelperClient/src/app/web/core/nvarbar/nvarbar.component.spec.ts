import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvarbarComponent } from './nvarbar.component';

describe('NvarbarComponent', () => {
  let component: NvarbarComponent;
  let fixture: ComponentFixture<NvarbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvarbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvarbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
