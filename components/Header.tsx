import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

type LogoProps = {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  style?: React.CSSProperties;
};

const Logo = ({ onClick, className = '', style }: LogoProps) => (
  <a href="/" onClick={onClick} className={`flex items-center gap-2.5 group ${className}`} aria-label="Página Inicial" style={style}>
    <img 
      src="https://iili.io/f7l0tiF.png" 
      alt="Logo Bot SMS Virtual" 
      className="w-9 h-9 object-contain"
    />
    <span className="font-bold text-lg text-slate-900 group-hover:text-blue-500 transition-colors">𝗕𝗢𝗧 𝗦𝗠𝗦 𝗩𝗜𝗥𝗧𝗨𝗔𝗟 𝗕𝗥</span>
  </a>
);

const CloseIcon = () => (
  <svg className="w-8 h-8 text-slate-500 hover:text-slate-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-7 h-7 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
  </svg>
);

interface HeaderProps {
  onNavigate?: (target: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Se a função onNavigate foi passada (pelo App.tsx), use-a para gerenciar a navegação
    if (onNavigate) {
      onNavigate(href);
      return;
    }

    // Fallback para comportamento padrão se não houver onNavigate
    if (href === '#' || href === '/') {
       window.scrollTo({ top: 0, behavior: "smooth" });
       return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const headerOffset = 80; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };
  
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavLinkClick(e, '#');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-900/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo onClick={handleLogoClick} />
            
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="font-medium text-sm text-slate-600 hover:text-blue-500 flex items-center gap-1.5 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-slate-100"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href="https://t.me/SMSonlineBrasil_bot?start="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-bold text-sm rounded-full px-5 py-2.5 transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md shadow-blue-500/20"
              >
                Acessar Bot
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={handleMenuToggle} aria-label="Abrir menu" aria-expanded={isMenuOpen} className="p-2 -mr-2">
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 flex flex-col transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[46rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#38bdf8] to-[#2dd4bf] opacity-20" 
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} 
          />
        </div>

        <div className="flex-1 bg-slate-50/80 backdrop-blur-2xl">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6">
            <Logo 
              onClick={handleLogoClick}
              className={`transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
              style={{ transitionDelay: '200ms' }}
            />
            <button 
              onClick={handleMenuToggle} 
              aria-label="Fechar menu" 
              className={`p-2 -mr-2 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <CloseIcon />
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center gap-6 text-center" style={{height: 'calc(100% - 160px)'}}>
            {NAV_LINKS.map((link, index) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`font-['Sora'] text-2xl font-semibold text-slate-800 hover:text-blue-500 flex items-center gap-3 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${250 + index * 100}ms` }}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className={`p-8 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '550ms' }}>
            <a
              href="https://t.me/SMSonlineBrasil_bot?start="
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold rounded-full px-8 py-3.5 shadow-lg shadow-blue-500/30"
            >
              🚀 Acessar o Bot
            </a>
          </div>
        </div>
      </div>
    </>
  );
};