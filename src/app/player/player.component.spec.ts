/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {PlayerComponent} from "./player.component";

describe("PlayerComponent", () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    component.mediaUrl = "/dummyUrl";
    fixture.detectChanges();
  });

  it("renders audio element with correct source", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("audio").src).toContain("/dummyUrl");
  });

  it("shows audio controls", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("audio").controls).toBeTruthy();
  });
});
