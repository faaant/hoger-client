import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerTasksComponent } from './cleaner-tasks.component';

describe('CleanerTasksComponent', () => {
  let component: CleanerTasksComponent;
  let fixture: ComponentFixture<CleanerTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CleanerTasksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CleanerTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
