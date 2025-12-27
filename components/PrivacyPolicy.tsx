
import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Política de Privacidade</h1>
      <p className="text-slate-500 mb-8 text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

      <div className="space-y-6 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Coleta de Dados</h2>
          <p>
            Nossa prioridade é o anonimato. Coletamos a menor quantidade possível de dados para o funcionamento do serviço:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>ID do Telegram:</strong> Utilizamos seu ID público do Telegram para identificar sua conta e gerenciar seu saldo no Bot.</li>
            <li><strong>Histórico de Transações:</strong> Mantemos registro das solicitações de números e recargas para fins de suporte e contabilidade interna.</li>
          </ul>
          <p className="mt-2">
            <strong>Não coletamos:</strong> Seu nome real (a menos que fornecido no Telegram), endereço, CPF ou dados de cartão de crédito (pagamentos são via PIX externo).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Conteúdo das Mensagens (SMS)</h2>
          <p>
            O sistema processa as mensagens SMS recebidas automaticamente para extrair o código de verificação.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>As mensagens são exibidas para você no Bot.</li>
            <li>Não utilizamos o conteúdo das suas mensagens para nenhum outro fim além da entrega do serviço.</li>
            <li>Recomendamos não utilizar este serviço para receber informações sensíveis ou bancárias, dado a natureza temporária dos números.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Compartilhamento de Dados</h2>
          <p>
            Nós <strong>não</strong> vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing. Seus dados podem ser divulgados apenas se exigido por lei ou ordem judicial.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Cookies e Rastreamento</h2>
          <p>
            Este website utiliza cookies básicos para fins de desempenho e análise anônima de tráfego para melhorar a experiência do usuário. Não utilizamos cookies para rastreamento publicitário invasivo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">5. Segurança</h2>
          <p>
            Implementamos medidas de segurança razoáveis para proteger os dados armazenados. No entanto, nenhum sistema é 100% infalível. Ao usar o serviço, você reconhece os riscos inerentes à comunicação online.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contato</h2>
          <p>
            Para questões relacionadas à privacidade ou exclusão de dados, entre em contato através do nosso suporte oficial no Telegram: <strong>@sms_virtual_br</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};
