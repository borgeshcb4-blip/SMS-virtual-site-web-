import React, { useState, useEffect, useRef } from 'react';
import { APPS, FEATURES, FAQS, TESTIMONIALS } from './constants';
import { AppBadge } from './components/AppBadge';
import { FaqItem } from './components/FaqItem';
import { FeatureCard } from './components/FeatureCard';
import { Header } from './components/Header';
import { TestimonialCard } from './components/TestimonialCard';
import { HowItWorks } from './components/HowItWorks';
import { TermsOfUse } from './components/TermsOfUse';
import { PrivacyPolicy } from './components/PrivacyPolicy';

const FooterLogo = () => (
  <div className="flex items-center gap-3">
    <img 
      src="https://iili.io/f7l0tiF.png" 
      alt="Logo Bot SMS Virtual - Número Virtual WhatsApp Telegram" 
      className="w-8 h-8 object-contain"
    />
    <span className="font-bold text-lg text-slate-800">𝗕𝗢𝗧 𝗦𝗠𝗦 𝗩𝗜𝗥𝗧𝗨𝗔𝗟 𝗕𝗥</span>
  </div>
);

const TrustBadgeIcon1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const TrustBadgeIcon2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const TrustBadgeIcon3 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
);

const TrustBadgeIcon4 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const TrustBadgeIcon5 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const TrustBadgeIcon6 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const TrustBadgeIcon7 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
);

const TrustBadgeIcon8 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);


const TRUST_BADGES = [
  {
    icon: <TrustBadgeIcon1 />,
    title: "Garantia de Recebimento",
    description: "Não recebeu? Não paga nada."
  },
  {
    icon: <TrustBadgeIcon2 />,
    title: "Privacidade Garantida",
    description: "Seu número pessoal protegido."
  },
  {
    icon: <TrustBadgeIcon7 />,
    title: "Menor Preço do Mercado",
    description: "Economia real garantida."
  },
  {
    icon: <TrustBadgeIcon8 />,
    title: "+94k Números",
    description: "Estoque sempre disponível."
  },
  {
    icon: <TrustBadgeIcon3 />,
    title: "Suporte Especializado",
    description: "Ajuda rápida sempre que precisar."
  },
  {
    icon: <TrustBadgeIcon4 />,
    title: "Ativação Instantânea",
    description: "Receba o código em segundos."
  },
  {
    icon: <TrustBadgeIcon5 />,
    title: "Sem Mensalidade",
    description: "Pague apenas pelo que usar."
  },
  {
    icon: <TrustBadgeIcon6 />,
    title: "Disponível 24/7",
    description: "Sistema automático dia e noite."
  }
];

// Duplicamos a lista para criar o efeito de loop infinito
const EXTENDED_TRUST_BADGES = [...TRUST_BADGES, ...TRUST_BADGES];

type ViewState = 'home' | 'terms' | 'privacy';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Função centralizada de navegação
  const navigateTo = (target: string) => {
    if (target === 'terms') {
      setCurrentView('terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'privacy') {
      setCurrentView('privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target.startsWith('#')) {
      // Se estiver em outra página que não a Home, volta para a Home primeiro
      if (currentView !== 'home') {
        setCurrentView('home');
        // Pequeno delay para permitir que a Home renderize antes de fazer o scroll
        setTimeout(() => {
          scrollToSection(target.substring(1));
        }, 100);
      } else {
        scrollToSection(target.substring(1));
      }
    } else {
      // Padrão (como link de Início)
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    if (!id) {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Efeito para definir a posição inicial do carrossel no segundo item (Privacidade Garantida)
  useEffect(() => {
    if (currentView === 'home' && carouselRef.current) {
      // Pequeno delay para garantir que o layout esteja pronto
      const timer = setTimeout(() => {
        if (carouselRef.current) {
          const container = carouselRef.current;
          const firstCard = container.firstElementChild as HTMLElement;
          if (firstCard) {
            // Rola para o índice 1 (segundo item)
            // Largura do card + gap (16px)
            const itemWidth = firstCard.offsetWidth + 16;
            container.scrollTo({ left: itemWidth, behavior: 'auto' });
          }
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  // Lógica de Scroll Infinito
  useEffect(() => {
    // Só roda o carrossel se estiver na Home
    if (currentView !== 'home') return;

    const intervalId = setInterval(() => {
        if (!carouselRef.current || isPaused) return;

        const container = carouselRef.current;
        const cardWidth = container.children[0]?.getBoundingClientRect().width || 0;
        const gap = 16; 
        const itemWidth = cardWidth + gap;
        
        // Se passamos da metade do conteúdo (que é a cópia exata do início),
        // resetamos a posição para o início correspondente silenciosamente (instant)
        // Isso cria a ilusão de que a lista nunca termina.
        if (container.scrollLeft >= (container.scrollWidth / 2) - 10) {
             container.scrollTo({
                 left: container.scrollLeft - (container.scrollWidth / 2),
                 behavior: 'auto' // 'auto' faz o pulo ser instantâneo, sem animação
             });
        }

        // Realiza o scroll suave para o próximo item
        container.scrollBy({ left: itemWidth, behavior: 'smooth' });

    }, 3000); 

    return () => clearInterval(intervalId);
  }, [isPaused, currentView]);
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans flex flex-col items-center overflow-x-hidden">
      <Header onNavigate={navigateTo} />
      
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 md:pb-20 flex-grow">
        
        {currentView === 'terms' && <TermsOfUse />}
        {currentView === 'privacy' && <PrivacyPolicy />}
        
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <section className="text-center relative isolate">
              
              <div>
                <div className="btn-shimmer relative overflow-hidden bg-green-100 border border-green-300 rounded-full px-6 py-2.5 inline-flex items-center mb-8 shadow-lg shadow-green-400/20 transform transition-transform hover:scale-105 cursor-default">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm md:text-base text-slate-900 font-bold tracking-wide">Ambiente Seguro</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Seu Bot no Telegram para <br className="hidden md:block" /> Números Virtuais
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed">
                Receba códigos SMS para WhatsApp, Telegram e centenas de plataformas usando nossos números virtuais. Rápido, seguro e 100% anônimo.
              </p>
              <div className="mt-8 md:mt-10">
                <a
                  href="https://t.me/SMSonlineBrasil_bot?start="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer inline-block bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-bold text-base md:text-lg rounded-full px-8 py-3.5 md:px-10 md:py-4 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  🚀 Conversar com o Bot
                </a>
              </div>
               {/* Social Proof User Count */}
               <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full py-1.5 px-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex -space-x-2 overflow-hidden">
                          <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=J&background=2563eb&color=fff&bold=true" alt="Usuário 1"/>
                          <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=M&background=14b8a6&color=fff&bold=true" alt="Usuário 2"/>
                          <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=L&background=f97316&color=fff&bold=true" alt="Usuário 3"/>
                      </div>
                      <p className="text-slate-600 text-xs font-medium pr-1">
                        +<span className="font-bold text-slate-900">10.000</span> usuários
                      </p>
                  </div>
                </div>
            </section>

            {/* Trust Badges Section - Auto Scroll Carousel */}
            <section className="mt-12 md:mt-20">
                <div 
                  ref={carouselRef}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 px-4 -mx-4 md:mx-auto max-w-5xl [&::-webkit-scrollbar]:hidden"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {EXTENDED_TRUST_BADGES.map((badge, index) => (
                        <div key={index} className="flex-none w-[75vw] sm:w-[320px] md:w-[280px] snap-center">
                            <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center">
                                <div className="flex-none flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white mb-3 shadow-md shadow-blue-500/20">
                                    {badge.icon}
                                </div>
                                <h3 className="font-bold text-slate-800 text-sm md:text-base">{badge.title}</h3>
                                <p className="text-xs md:text-sm text-slate-500 mt-1">{badge.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* How It Works Section - Added Here */}
            <section className="mt-20 md:mt-28">
              <HowItWorks />
            </section>

            {/* Why Use Us Section */}
            <section className="mt-20 md:mt-28 text-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                  Por que usar nossos números?
                </h2>
                <p className="max-w-2xl mx-auto text-slate-600 mb-8 text-sm md:text-base">
                  Nossos números são perfeitos para verificação de contas e proteção da sua privacidade.
                </p>
                <p className="mb-4 text-slate-500 text-sm font-medium">Compatível com os principais serviços:</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
                {APPS.map((app) => (
                  <AppBadge key={app.name} name={app.name} color={app.color} />
                ))}
              </div>
              <div className="mt-10">
                <a
                  href="https://t.me/SMSonlineBrasil_bot?start="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-bold text-sm md:text-base rounded-full px-8 py-3.5 transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5"
                >
                  🚀 Obter meu Número Virtual
                </a>
              </div>
            </section>

            {/* Price and Service Section */}
            <section id="features" className="mt-20 md:mt-28 scroll-mt-28">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                    Preço Acessível e Confiável
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm md:text-base">
                    Custo-benefício, velocidade e segurança para suas verificações.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {FEATURES.map((feature) => (
                  <FeatureCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
              <div className="mt-10 md:mt-12 text-center">
                <a
                  href="https://t.me/SMSonlineBrasil_bot?start="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-bold text-sm md:text-base rounded-full px-8 py-3.5 transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5"
                >
                  🚀 Obter meu Número Virtual
                </a>
              </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="mt-20 md:mt-28 scroll-mt-28">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                        O que nossos usuários dizem
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm md:text-base">
                        A confiança e a satisfação dos nossos clientes são a nossa prioridade.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {TESTIMONIALS.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.name}
                            {...testimonial}
                        />
                    ))}
                </div>
            </section>
            
            {/* FAQ Section */}
            <section id="faq" className="mt-20 md:mt-28 max-w-3xl mx-auto scroll-mt-28">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                        Perguntas Frequentes
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm md:text-base">
                        Tire suas dúvidas sobre nosso serviço.
                    </p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                    {FAQS.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFaqIndex === index}
                            onToggle={() => handleFaqToggle(index)}
                        />
                    ))}
                </div>
            </section>
          </>
        )}

      </main>
      
      <footer className="w-full bg-white border-t border-slate-200 mt-20 pt-12 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                {/* Coluna da Marca */}
                <div className="col-span-1 md:col-span-2">
                    <FooterLogo />
                    <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-xs">
                        A solução mais rápida e segura para receber SMS online. Proteja sua privacidade em centenas de serviços com nossos números virtuais.
                    </p>
                </div>

                {/* Coluna Navegação */}
                <div>
                    <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Navegação</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li>
                          <button onClick={() => navigateTo('#')} className="hover:text-blue-500 transition-colors text-left">Início</button>
                        </li>
                        <li>
                          <button onClick={() => navigateTo('#features')} className="hover:text-blue-500 transition-colors text-left">Recursos</button>
                        </li>
                        <li>
                          <button onClick={() => navigateTo('#testimonials')} className="hover:text-blue-500 transition-colors text-left">Depoimentos</button>
                        </li>
                        <li>
                          <button onClick={() => navigateTo('#faq')} className="hover:text-blue-500 transition-colors text-left">FAQ</button>
                        </li>
                    </ul>
                </div>

                {/* Coluna Legal */}
                <div>
                    <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Legal</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li>
                          <button onClick={() => navigateTo('terms')} className="hover:text-blue-500 transition-colors text-left">Termos de Uso</button>
                        </li>
                        <li>
                          <button onClick={() => navigateTo('privacy')} className="hover:text-blue-500 transition-colors text-left">Política de Privacidade</button>
                        </li>
                        <li><a href="https://t.me/sms_virtual_br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors flex items-center gap-1">
                            Suporte
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a></li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 text-xs text-center md:text-left">
                    &copy; {new Date().getFullYear()} Bot SMS Virtual. Todos os direitos reservados.
                </p>
                <div className="flex gap-4">
                    {/* Placeholder para ícones sociais se necessário no futuro */}
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}