
import React from 'react';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Termos de Uso</h1>
      <p className="text-slate-500 mb-8 text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

      <div className="space-y-6 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o <strong>BOT SMS VIRTUAL BR</strong> através do Telegram ou deste website, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Descrição do Serviço</h2>
          <p>
            Fornecemos números de telefone virtuais temporários para o propósito exclusivo de recebimento de mensagens SMS para verificação de contas em diversos serviços online.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Os números são temporários e descartáveis.</li>
            <li>Não garantimos a disponibilidade permanente de números para um serviço específico.</li>
            <li>O serviço é automatizado e entregue via Bot do Telegram.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Pagamentos e Reembolsos</h2>
          <p>
            O sistema opera no modelo "pague pelo que usar" ou através de recargas de saldo.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Garantia de Recebimento:</strong> Se o código SMS não chegar dentro do tempo estipulado, o valor não será descontado do seu saldo ou será estornado automaticamente pelo sistema.</li>
            <li>Não realizamos reembolsos de saldo não utilizado em dinheiro real, salvo em casos de falha técnica comprovada e persistente do sistema que impeça totalmente o uso.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Uso Proibido</h2>
          <p>
            É estritamente proibido usar nossos números para:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Atividades ilegais ou fraudulentas.</li>
            <li>Disseminação de spam, phishing ou malware.</li>
            <li>Assédio ou ameaças a terceiros.</li>
          </ul>
          <p className="mt-2">
            Reservamo-nos o direito de bloquear qualquer usuário que viole estas regras sem aviso prévio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">5. Limitação de Responsabilidade</h2>
          <p>
            O <strong>BOT SMS VIRTUAL BR</strong> não se responsabiliza por:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Perda de acesso às contas criadas com nossos números virtuais (pois os números são temporários).</li>
            <li>Falhas em serviços de terceiros (WhatsApp, Telegram, Google, etc.) que recusem os números.</li>
            <li>Danos diretos ou indiretos decorrentes do uso ou incapacidade de usar o serviço.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
