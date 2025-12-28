import React from 'react';
import type { Feature, App, Testimonial, FaqItem, NavLink } from './types';

const PriceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
);

// Icons for Navigation
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const QuestionMarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const NAV_LINKS: NavLink[] = [
    { href: '#features', label: 'Recursos', icon: <SparklesIcon /> },
    { href: '#testimonials', label: 'Depoimentos', icon: <UsersIcon /> },
    { href: '#faq', label: 'Dúvidas', icon: <QuestionMarkIcon /> },
];

export const FEATURES: Feature[] = [
  {
    icon: <PriceIcon />,
    title: 'Preço Acessível',
    description: 'Oferecemos os melhores preços do mercado, garantindo um serviço de qualidade sem pesar no seu bolso.',
  },
  {
    icon: <ZapIcon />,
    title: 'Serviço Rápido',
    description: 'Receba seu código de verificação por SMS em segundos. Nosso sistema é totalmente automatizado para sua conveniência.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Confiável e Seguro',
    description: 'Utilize números privados e exclusivos para garantir a segurança e a privacidade de suas contas online.',
  },
];

export const APPS: App[] = [
    { name: 'Telegram', color: '#0088cc' },
    { name: 'WhatsApp', color: '#25D366' },
    { name: 'Google', color: '#4285F4' },
    { name: 'Uber', color: '#000000' },
    { name: 'iFood', color: '#EA1D2C' },
    { name: 'x', color: '#000000' },
    { name: 'Facebook', color: '#1877F2' },
    { name: 'Instagram', color: '#E4405F' },
    { name: 'Discord', color: '#5865F2' },
    { name: 'e muitos outros...', color: '#64748b' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'João P.',
    avatar: 'https://ui-avatars.com/api/?name=JP&background=2563eb&color=fff&size=100&bold=true',
    stars: 5,
    comment: 'Serviço incrível! Rápido, fácil de usar e muito confiável. Consegui ativar todas as minhas contas em minutos. Recomendo demais!',
  },
  {
    name: 'Mariana C.',
    avatar: 'https://ui-avatars.com/api/?name=MC&background=14b8a6&color=fff&size=100&bold=true',
    stars: 5,
    comment: 'O melhor bot para números virtuais que já usei. O preço é super justo e o suporte é excelente. Salvou meu dia!',
  },
  {
    name: 'Lucas F.',
    avatar: 'https://ui-avatars.com/api/?name=LF&background=f97316&color=fff&size=100&bold=true',
    stars: 5,
    comment: 'Finalmente uma solução que funciona sem dor de cabeça. A privacidade que eu precisava com a agilidade que eu queria. 10/10!',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'O que é um número virtual?',
    answer: 'É um número de telefone que não está vinculado a um chip (SIM card) físico. Ele é usado online para receber SMS de verificação, protegendo seu número pessoal e sua privacidade.',
  },
  {
    question: 'É seguro usar este serviço?',
    answer: 'Sim! Nossos números são privados e dedicados a você durante o uso. Após o período de utilização, o número é descartado. Não compartilhamos seus dados ou o conteúdo das mensagens.',
  },
  {
    question: 'Para quais aplicativos posso usar os números?',
    answer: 'Você pode usar para centenas de aplicativos e serviços, como WhatsApp, Telegram, Google, Uber, iFood, x, Kwai e muitos outros que exigem verificação por SMS.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'O pagamento é processado de forma segura diretamente no Telegram via PIX. Você só paga pelos SMS que receber.',
  },
  {
    question: 'E se eu não receber o código SMS?',
    answer: 'Caso não receba o SMS dentro do tempo estipulado, o valor não é cobrado. Você pode tentar com outro número ou para outro serviço sem custo adicional.',
  },
];

export const MOCK_USERS: string[] = [
  'Ana',
  'Bruno',
  'Carla',
  'Daniel',
  'Eduarda',
  'Felipe',
  'Gabriela',
  'Heitor',
  'Isabela',
  'João',
  'Larissa',
  'Marcos',
  'Pedro',
  'Mariana',
  'Rafael',
  'Fernanda',
  'Lucas',
  'Juliana',
  'Thiago',
  'Beatriz'
];

export const MOCK_SERVICES: { name: string; }[] = [
    { name: 'WhatsApp' },
    { name: 'WhatsApp' }, // Mais frequência
    { name: 'Telegram' },
    { name: 'Google' },
    { name: 'iFood' },
    { name: 'Uber' },
    { name: 'Facebook' },
    { name: 'Facebook' }, // Mais frequência
    { name: 'Instagram' },
    { name: 'Discord' },
    { name: 'Discord' }, // Mais frequência
    { name: 'ChatGPT' }, // Novo
    { name: 'ChatGPT' }, // Mais frequência
    { name: 'x' },
];