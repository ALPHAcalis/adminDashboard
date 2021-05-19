import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrengistrerRetourComponent } from './enrengistrer-retour.component';

describe('EnrengistrerRetourComponent', () => {
  let component: EnrengistrerRetourComponent;
  let fixture: ComponentFixture<EnrengistrerRetourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrengistrerRetourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrengistrerRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
