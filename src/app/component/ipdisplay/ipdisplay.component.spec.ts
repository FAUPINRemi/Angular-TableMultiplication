import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdisplayComponent } from './ipdisplay.component';

describe('IpdisplayComponent', () => {
  let component: IpdisplayComponent;
  let fixture: ComponentFixture<IpdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
