import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AMapComponent } from './a-map.component';

describe('AMapComponent', () => {
  let component: AMapComponent;
  let fixture: ComponentFixture<AMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
