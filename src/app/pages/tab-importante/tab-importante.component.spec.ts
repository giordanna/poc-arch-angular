import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TabImportanteComponent } from "./tab-importante.component";

describe("TabImportanteComponent", () => {
  let component: TabImportanteComponent;
  let fixture: ComponentFixture<TabImportanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabImportanteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabImportanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
