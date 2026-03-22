import { describe, expect, it } from "vitest";
import { getLocalizedPath } from "./route-localization";

describe("getLocalizedPath", () => {
  it("keeps static routes unchanged", () => {
    expect(getLocalizedPath("/kontakt", "en")).toBe("/kontakt");
    expect(getLocalizedPath("/ueber-uns", "de")).toBe("/ueber-uns");
  });

  it("maps German service detail slugs to English", () => {
    expect(getLocalizedPath("/leistungen/strategie-positionierung", "en")).toBe(
      "/leistungen/strategy-positioning"
    );
  });

  it("maps English service detail slugs back to default locale slugs", () => {
    expect(getLocalizedPath("/leistungen/strategy-positioning", "de")).toBe(
      "/leistungen/strategie-positionierung"
    );
    expect(getLocalizedPath("/leistungen/strategy-positioning", "it")).toBe(
      "/leistungen/strategie-positionierung"
    );
  });

  it("maps German industry detail slugs to English", () => {
    expect(getLocalizedPath("/branchen/family-offices-private-capital", "en")).toBe(
      "/branchen/family-offices-private-capital"
    );
  });

  it("maps English industry detail slugs back to default locale slugs", () => {
    expect(getLocalizedPath("/branchen/hospitality-business-centers", "de")).toBe(
      "/branchen/hospitality-business-centers"
    );
  });
});
