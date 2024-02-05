import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetableComponent } from './onetable.component';

describe('OnetableComponent', () => {
  let component: OnetableComponent;
  let fixture: ComponentFixture<OnetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnetableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
