import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitestHistoryComponent } from './minitest-history.component';

describe('MinitestHistoryComponent', () => {
  let component: MinitestHistoryComponent;
  let fixture: ComponentFixture<MinitestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinitestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
