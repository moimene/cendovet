import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'; // Added MessageCircle for WhatsApp

const Footer = () => {
    const navigate = useNavigate();
    
    const quickLinks = [
        { href: "/", label: "Inicio" },
        { href: "/servicios/laparoscopia", label: "Servicios" },
        { href: "/para-clinicas", label: "Para Clínicas" },
        { href: "/blog", label: "Blog" },
        { href: "/contacto", label: "Contacto" }
    ];

    const legalLinks = [
        { href: "/politica-privacidad", label: "Política de Privacidad" },
        { href: "/aviso-legal", label: "Aviso Legal" },
        { href: "/politica-cookies", label: "Política de Cookies" }
    ];

    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo & Info */}
                    <div className="space-y-4">
                        <Link to="/" className="text-3xl font-bold">
                            CENDO<span className="text-teal-400">VET</span>
                        </Link>
                        <p className="text-slate-400">Centro pionero en cirugía veterinaria mínimamente invasiva.</p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/cvcampogibraltar/" aria-label="Síguenos en Facebook" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Facebook /></a>
                            <a href="https://www.instagram.com/cvcampogibraltar/" aria-label="Síguenos en Instagram" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Instagram /></a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Enlaces rápidos</p>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.label}><Link to={link.href} className="text-slate-300 hover:text-teal-400 transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</p>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start gap-3"><MapPin size={20} className="mt-1 text-teal-400 flex-shrink-0" /> <span>Av. Virgen de la Palma, 3, 11203 Algeciras, Cádiz</span></li>
                            <li className="flex items-center gap-3"><Phone size={18} className="text-teal-400" /> <a href="tel:956097060" className="hover:text-teal-400 transition-colors">956 097 060</a></li>
                            <li className="flex items-center gap-3"><Mail size={18} className="text-teal-400" /> <a href="mailto:info@cvcampogibraltar.es" className="hover:text-teal-400 transition-colors">info@cvcampogibraltar.es</a></li>
                            <li className="flex items-center gap-3"><MessageCircle size={18} className="text-teal-400" /> <a href="https://wa.me/34956097060" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">WhatsApp 956 097 060</a></li>
                        </ul>
                    </div>

                    {/* Cobertura */}
                    <div>
                         <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Áreas de Cobertura</p>
                         <p className="text-slate-400">Campo de Gibraltar, Marbella, Sotogrande, Gibraltar, Ceuta, Cádiz, Málaga y Sevilla. Referencias a nivel nacional.</p>
                    </div>

                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                    <div className="flex justify-center gap-6 mb-4">
                        {legalLinks.map(link => (
                            <li key={link.label} className="list-none"><Link to={link.href} className="hover:text-teal-400 transition-colors">{link.label}</Link></li>
                        ))}
                    </div>
                    <p>&copy; {new Date().getFullYear()} CENDOVET. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
