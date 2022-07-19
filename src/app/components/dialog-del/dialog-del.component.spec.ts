import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDelComponent } from './dialog-del.component';

describe('DialogDelComponent', () => {
  let component: DialogDelComponent;
  let fixture: ComponentFixture<DialogDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
