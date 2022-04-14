import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormalComponent } from './resume-formal.component';

describe('ResumeFormalComponent', () => {
  let component: ResumeFormalComponent;
  let fixture: ComponentFixture<ResumeFormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeFormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
