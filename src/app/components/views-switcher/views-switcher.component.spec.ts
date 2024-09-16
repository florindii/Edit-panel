import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsSwitcherComponent } from './views-switcher.component';

describe('ViewsSwitcherComponent', () => {
  let component: ViewsSwitcherComponent;
  let fixture: ComponentFixture<ViewsSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
