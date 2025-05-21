import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import { AuthService } from "../../core/services/auth/auth.service";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj("AuthService", ["login"]);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the login component", () => {
    expect(component).toBeTruthy();
  });

  it("should have invalid form when fields are empty", () => {
    expect(component.form.valid).toBeFalse();
  });

  it("should have valid form when fields are filled", () => {
    component.form.setValue({ username: "admin", password: "admin" });
    expect(component.form.valid).toBeTrue();
  });

  it("should call login() and navigate on success", () => {
    const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
    (component as any)._router = routerSpy;

    authServiceSpy.login.and.returnValue(of(true));
    component.form.setValue({ username: "admin", password: "admin" });
    component.login();

    expect(authServiceSpy.login).toHaveBeenCalledWith("admin", "admin");
    expect(routerSpy.navigate).toHaveBeenCalledWith(["/characters"]);
  });
});
