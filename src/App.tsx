import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { PageLayout } from "@/components/PageLayout";
import Index from "./pages/Index";
import IndustriesOverview from "./pages/IndustriesOverview";
import IndustryDetail from "./pages/IndustryDetail";
import BusinessUnits from "./pages/BusinessUnits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <PageLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/branchen" element={<IndustriesOverview />} />
              <Route path="/branchen/:slug" element={<IndustryDetail />} />
              <Route path="/unternehmensbereiche" element={<BusinessUnits />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageLayout>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
