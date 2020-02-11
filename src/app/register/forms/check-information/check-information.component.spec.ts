import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CheckInformationComponent } from "./check-information.component";

describe("CheckInformationComponent", () => {
  let component: CheckInformationComponent;
  let fixture: ComponentFixture<CheckInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
