import { describe, expect, it } from "vitest";
import { add2 } from "../../packages/core/src/index";

describe("should", () => {
  it("add2", () => {
    expect(add2(1, 2)).toEqual(3);
  });
});
