import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Stethoscope, Microscope, HeartPulse, Bone, Brain, Camera, Cat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import cendovetLogo from '@/assets/logo_cendovet.svg';

const services = [
  { name: 'Cardiología', href: '/servicios/cardiologia', icon: HeartPulse },
  { name: 'Ecografía', href: '/servicios/ecografia', icon: Camera },
  { name: 'Endoscopia', href: '/servicios/endoscopia', icon: Microscope },
  { name: 'Cirugía MIS', href: '/servicios/cirugia-mis', icon: Stethoscope },
  { name: 'Traumatología', href: '/servicios/traumatologia', icon: Bone },
  { name: 'Neurología', href: '/servicios/neurologia', icon: Brain },
  { name: 'Medicina Felina', href: '/servicios/medicina-felina', icon: Cat },
];

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors",
        isActive && "text-cyan-600 dark:text-cyan-400"
      )
    }
  >
    {children}
  </NavLink>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-800/80">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">CENDOVET</span>
            <img className="h-10 w-auto" src={cendovetLogo} alt="CENDOVET Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          <NavItem to="/">Inicio</NavItem>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors focus:outline-none">
                Servicios <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <Link to={service.href} className="flex items-center gap-2">
                    <service.icon className="h-4 w-4" />
                    <span>{service.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavItem to="/para-clinicas">Para Clínicas</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/sobre-cendovet">Sobre CENDOVET</NavItem>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
          <Button asChild variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900 dark:hover:text-cyan-300">
            <Link to="/contacto">Contacto</Link>
          </Button>
          <Button asChild>
            <Link to="/para-clinicas/referir-caso">Referir un Caso</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 z-50" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10"
            >
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">CENDOVET</span>
                  <img
                    className="h-8 w-auto"
                    src={cendovetLogo}
                    alt="CENDOVET Logo"
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Cerrar menú</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-200/10">
                  <div className="space-y-2 py-6">
                    <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
                    <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white">Servicios</p>
                    {services.map((service) => (
                      <Link key={service.name} to={service.href} className="flex items-center gap-2 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 ml-4" onClick={() => setMobileMenuOpen(false)}>
                        <service.icon className="h-4 w-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                    <Link to="/para-clinicas" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>Para Clínicas</Link>
                    <Link to="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                    <Link to="/sobre-cendovet" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>Sobre CENDOVET</Link>
                  </div>
                  <div className="py-6 space-y-4">
                     <Button asChild size="lg" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                        <Link to="/para-clinicas/referir-caso">Referir un Caso</Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                        <Link to="/contacto">Contacto</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;