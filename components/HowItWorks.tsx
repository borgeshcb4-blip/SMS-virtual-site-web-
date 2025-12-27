
import React from 'react';

const STEPS = [
  {
    id: 1,
    title: '1. Inicie o Bot 🤖',
    description: 'Acesse nosso bot oficial no Telegram e clique em "Iniciar" para abrir o menu de serviços.',
    image: 'https://iili.io/f7YDgnV.md.png',
  },
  {
    id: 2,
    title: '2. Selecione o App Desejado',
    description: 'Navegue pelo menu interativo e escolha o aplicativo que deseja ativar.',
    image: 'https://iili.io/fVI3t7p.md.png',
  },
  {
    id: 3,
    title: '3. Ativação Instantânea ⚡',
    description: 'Após o pagamento, seu número é liberado na hora. Clique em "Verificar SMS" para visualizar seu código e concluir a criação da sua conta com total segurança.',
    image: 'https://iili.io/fVIfHgf.md.png',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Como funciona?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Processo 100% automático. Em menos de 1 minuto você consegue seu número.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 justify-items-center">
        {STEPS.map((step) => (
          <div key={step.id} className="flex flex-col items-center group">
            
            {/* Step Description - Moved to Top */}
            <div className="mb-8 text-center max-w-[280px]">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mb-3 shadow-sm">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>

            {/* Smartphone Frame */}
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-[9px] rounded-[2.3rem] h-[580px] w-[300px] shadow-2xl flex flex-col justify-center select-none transform transition-transform duration-500 hover:scale-[1.02]">
              {/* Hardware Buttons */}
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[14px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[14px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[14px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[14px] top-[142px] rounded-e-lg"></div>
              
              {/* Screen Area */}
              <div className="rounded-[1.75rem] overflow-hidden w-full h-full bg-slate-900 relative border border-slate-900">
                {/* Screen Content - Image */}
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover object-top"
                />
                {/* Shimmer Effect Overlay */}
                <div className="phone-shimmer pointer-events-none"></div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
