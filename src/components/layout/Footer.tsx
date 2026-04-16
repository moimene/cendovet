import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
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
        <footer className="bg-slate-900 text-white border-t border-slate-800">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & Info */}
                    <div className="space-y-4">
                        <Link to="/" className="text-2xl font-bold tracking-tight">
                            CENDO<span className="text-teal-500">VET</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">Centro pionero en cirugía veterinaria mínimamente invasiva en el Campo de Gibraltar.</p>
                        <div className="flex gap-4 text-sm">
                            <a href="https://www.facebook.com/cvcampogibraltar/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
                            <span className="text-slate-600">|</span>
                            <a href="https://www.instagram.com/cvcampogibraltar/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Enlaces</p>
                        <ul className="space-y-2 text-sm">
                            {quickLinks.map(link => (
                                <li key={link.label}><Link to={link.href} className="text-slate-400 hover:text-white transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Contacto</p>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Av. Virgen de la Palma, 3<br/>11203 Algeciras, Cádiz</li>
                            <li><a href="tel:956097060" className="hover:text-white transition-colors">956 097 060</a></li>
                            <li><a href="mailto:info@cvcampogibraltar.es" className="hover:text-white transition-colors">info@cvcampogibraltar.es</a></li>
                            <li><a href="https://wa.me/34956097060" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
                        </ul>
                    </div>

                    {/* Cobertura */}
                    <div>
                         <p className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Cobertura</p>
                         <p className="text-sm text-slate-400 leading-relaxed">Campo de Gibraltar, Marbella, Sotogrande, Gibraltar, Ceuta, Cádiz, Málaga, Sevilla. Referencias nacionales.</p>
                    </div>

                </div>
                <div className="mt-16 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>&copy; {new Date().getFullYear()} CENDOVET. Todos los derechos reservados.</p>
                        <div className="flex gap-6">
                            {legalLinks.map(link => (
                                <Link key={link.label} to={link.href} className="hover:text-slate-300 transition-colors">{link.label}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
