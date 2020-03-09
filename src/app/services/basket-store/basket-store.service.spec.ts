import { TestBed } from "@angular/core/testing";

import { BasketStoreService } from "./basket-store.service";

describe("BasketStoreService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: BasketStoreService = TestBed.get(BasketStoreService);
    expect(service).toBeTruthy();
  });
});
