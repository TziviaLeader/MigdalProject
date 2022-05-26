import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationInTheProcessComponent } from './information-in-the-process.component';

describe('InformationInTheProcessComponent', () => {
  let component: InformationInTheProcessComponent;
  let fixture: ComponentFixture<InformationInTheProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationInTheProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationInTheProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
