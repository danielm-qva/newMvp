import { TestBed } from "@angular/core/testing";

import { AuthCantActiveService } from "./auth-cant-active.service";

describe("AuthCantActiveService", () => {
  let service: AuthCantActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCantActiveService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
