import { afterEach, describe, expect, it, vi } from "vitest";
import { render, cleanup, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import App from "@/App";

vi.mock("@/components/ScrollReveal", () => ({
  ScrollReveal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
vi.mock("@/components/ScrollToTopButton", () => ({ ScrollToTopButton: () => null }));
vi.spyOn(window, "scrollTo").mockImplementation(() => {});

afterEach(cleanup);

describe("retired business-unit addresses", () => {
  it.each(["/unternehmensbereiche", "/unternehmensbereiche/", "/unternehmensbereiche/domizil"])(
    "redirects %s to the existing Consulting services overview",
    async (path) => {
      window.history.replaceState(null, "", path);
      render(<HelmetProvider><App /></HelmetProvider>);
      await waitFor(() => expect(window.location.pathname).toBe("/leistungen"));
    },
  );
});