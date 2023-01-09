import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAHomeComponent } from './qahome.component';

describe('QAHomeComponent', () => {
  let component: QAHomeComponent;
  let fixture: ComponentFixture<QAHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QAHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QAHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
