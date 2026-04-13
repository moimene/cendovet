import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import ServicioMISPage from "@/pages/ServicioMISPage";
import ParaClinicasPage from "@/pages/ParaClinicasPage";
import ReferirCasoPage from "@/pages/ReferirCasoPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import SobreCendovetPage from "@/pages/SobreCendovetPage";
import ContactoPage from "@/pages/ContactoPage";
import LegalPage from "@/pages/LegalPage";
import NotFoundPage from "@/pages/NotFoundPage";

const queryClient = new QueryClient();

const legal = [
  { path: 'politica-privacidad', title: 'Política de Privacidad' },
  { path: 'aviso-legal', title: 'Aviso Legal' },
  { path: 'politica-cookies', title: 'Política de Cookies' },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicios/:serviceKey" element={<ServicioMISPage />} />
              <Route path="/para-clinicas" element={<ParaClinicasPage />} />
              <Route path="/para-clinicas/referir-caso" element={<ReferirCasoPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/sobre-cendovet" element={<SobreCendovetPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              {legal.map(page => (
                <Route
                  key={page.path}
                  path={`/${page.path}`}
                  element={<LegalPage pageTitle={page.title} />}
                />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
