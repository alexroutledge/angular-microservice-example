import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroservicesButtonComponent } from './microservices-button.component';

describe('MicroservicesButtonComponent', () => {
  let component: MicroservicesButtonComponent;
  let fixture: ComponentFixture<MicroservicesButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroservicesButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroservicesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
