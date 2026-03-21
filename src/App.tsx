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
import ServicesOverview from "./pages/ServicesOverview";
import ServiceDetail from "./pages/ServiceDetail";
import BusinessUnits from "./pages/BusinessUnits";
import About from "./pages/About";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
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
              <Route path="/leistungen" element={<ServicesOverview />} />
              <Route path="/leistungen/:slug" element={<ServiceDetail />} />
              <Route path="/branchen" element={<IndustriesOverview />} />
              <Route path="/branchen/:slug" element={<IndustryDetail />} />
              <Route path="/unternehmensbereiche" element={<BusinessUnits />} />
              <Route path="/ueber-uns" element={<About />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageLayout>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
