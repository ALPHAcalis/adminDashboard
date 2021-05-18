import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationLivreComponent } from './information-livre.component';

describe('InformationLivreComponent', () => {
  let component: InformationLivreComponent;
  let fixture: ComponentFixture<InformationLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
