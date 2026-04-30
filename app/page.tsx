"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  MapPin, 
  Briefcase, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Globe, 
  PieChart, 
  Zap,
  DollarSign,
  ChevronRight,
  Plus,
  Calendar,
  Wallet,
  FileText,
  ShieldCheck,
  Rocket,
  Search,
  BarChart3,
  LineChart,
  Lightbulb,
  Award
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area
} from 'recharts';

// --- DATA & ASSETS ---
const marketData = [
  { name: 'População Ocupada (Brasil)', value: 103, color: '#e2e8f0' },
  { name: 'Trabalhadores Informais', value: 40.3, color: '#ff5a00' },
  { name: 'Trabalhadores Conta Própria', value: 26, color: '#ff8a50' },
];

const projectionData = [
  { month: 'Jan', value: 10 },
  { month: 'Mar', value: 25 },
  { month: 'May', value: 45 },
  { month: 'Jul', value: 80 },
  { month: 'Sep', value: 120 },
  { month: 'Nov', value: 144 },
];

const roadmap = [
  { 
    year: '2026', 
    region: 'Santa Catarina (Foco Inicial)', 
    cities: 'Grande Florianópolis, Balneário Camboriú, Blumenau, Joinville',
    insight: 'Menor taxa de desemprego (~3-4%) = Alta atividade econômica.',
    stats: '7.6M habitantes' 
  },
  { 
    year: '2027', 
    region: 'Região Sul', 
    cities: 'SC, PR, RS',
    insight: 'Forte cultura de construção, manutenção e serviços especializados.',
    stats: '30M habitantes' 
  },
  { 
    year: '2028', 
    region: 'Expansão Sudeste', 
    cities: 'SP, RJ, MG, ES',
    insight: 'O maior mercado consumidor e polo de serviços da América Latina.',
    stats: '90M habitantes' 
  },
];

// --- COMPONENTS ---

const InfoCard = ({ icon, title, items, color = "primary" }: any) => (
  <div className={`p-8 rounded-[2.5rem] border border-black/5 bg-white shadow-xl hover:shadow-2xl transition-all h-full`}>
    <div className={`w-14 h-14 rounded-2xl bg-${color}/10 text-${color} flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">{title}</h3>
    <ul className="space-y-4">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
          <CheckCircle2 className={`w-4 h-4 text-${color} shrink-0 mt-0.5`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function InvestorsLanding() {
  return (
    <div className="bg-white min-h-screen selection:bg-primary/20">
      
      {/* HEADER FIXO */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Trampio<span className="text-primary">.</span></span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <a href="#origem" className="hover:text-primary transition-colors">Origem</a>
            <a href="#problema" className="hover:text-primary transition-colors">O Problema</a>
            <a href="#solucao" className="hover:text-primary transition-colors">A Solução</a>
            <a href="#mercado" className="hover:text-primary transition-colors">Mercado</a>
            <a href="#monetizacao" className="hover:text-primary transition-colors">Receita</a>
          </div>
          <button className="pitch-button text-[10px] px-6 py-3 uppercase tracking-widest">
            Investir Agora
          </button>
        </div>
      </nav>

      {/* HERO: O PITCH FINAL */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -mr-40 -mt-40" />
        <div className="section-container relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                <Rocket className="w-4 h-4" /> Investor Pitch Deck 2026
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
                Não somos um marketplace.<br />
                Somos a <span className="premium-gradient-text">Infraestrutura.</span>
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed mb-12 max-w-2xl font-medium">
                “Enquanto o modelo atual apenas conecta, nós organizamos, potencializamos e damos previsibilidade ao trabalho autônomo.”
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="pitch-button text-lg px-10 py-5">
                  Conhecer a Tese
                </button>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />)}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-tight">+40M informais esperando estrutura</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. ORIGEM: DOR REAL */}
      <section id="origem" className="py-24 border-t border-black/5">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl" />
               <div className="relative glass-card p-10 bg-white aspect-square flex flex-col justify-center">
                  <Lightbulb className="w-16 h-16 text-primary mb-8" />
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">Nascido na prática.</h2>
                  <p className="text-lg text-slate-600 leading-relaxed italic">
                    “Antes da plataforma, eu fui o prestador. Vivi a incerteza de clientes, a bagunça da logística e o caos financeiro. O problema não era só achar o cliente — era operar o trabalho.”
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                     <div className="w-12 h-12 bg-slate-900 rounded-full" />
                     <div>
                        <p className="text-sm font-black text-slate-900 uppercase">Founder Trampio</p>
                        <p className="text-xs text-slate-500 font-bold">Experiência Real de Campo</p>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-4">Diferencial Único</h3>
               <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
                 Uma resposta prática para um mercado teórico.
               </h2>
               <div className="space-y-8">
                  {[
                    { t: "Predictability", d: "Conseguir clientes de forma previsível e constante." },
                    { t: "Logistics", d: "Organização de agenda e logística de deslocamento." },
                    { t: "Control", d: "Domínio financeiro e operacional do próprio tempo." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                       </div>
                       <div>
                          <h4 className="font-black text-slate-900 uppercase text-sm tracking-tight mb-1">{item.t}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O PROBLEMA: MODELO ATUAL */}
      <section id="problema" className="py-24 bg-slate-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-6 uppercase">O Modelo Atual Falhou.</h2>
             <p className="text-slate-500 font-medium">Plataformas como o GetNinjas validaram o mercado, mas geraram um problema estrutural de retenção.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[3rem] border border-red-500/10 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5"><AlertCircle className="w-32 h-32" /></div>
               <h3 className="text-2xl font-black text-red-500 uppercase mb-8">Concorrentes (Leads)</h3>
               <ul className="space-y-6">
                  {[
                    "Cobrança por lead: Risco total para o profissional.",
                    "Baixa previsibilidade de retorno financeiro.",
                    "Zero suporte à operação do dia a dia.",
                    "Profissional é apenas uma mercadoria de intermediação."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 text-slate-600 font-medium">
                       <XCircle className="w-6 h-6 text-red-500 shrink-0" /> {text}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="bg-slate-900 p-12 rounded-[3rem] border border-primary/20 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10"><Zap className="w-32 h-32 text-primary" /></div>
               <h3 className="text-2xl font-black text-primary uppercase mb-8">Modelo Trampio</h3>
               <ul className="space-y-6">
                  {[
                    "Assinatura justa: Acesso total à região.",
                    "Foco na eficiência operacional (Gestão).",
                    "Infraestrutura de trabalho completa.",
                    "Incentivo alinhado: Só continuamos se o profissional tiver retorno."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 text-white font-medium">
                       <CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> {text}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A SOLUÇÃO: SISTEMA OPERACIONAL */}
      <section id="solucao" className="py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-32">
               <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-4">A Plataforma</h3>
               <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
                 O Sistema Operacional do Autônomo.
               </h2>
               <p className="text-slate-600 leading-relaxed mb-8">
                 Deixamos de ser um "app de serviço" para ser a infraestrutura de trabalho. O profissional usa a Trampio de ponta a ponta.
               </p>
               <div className="p-6 bg-slate-50 rounded-3xl border border-black/5 italic text-slate-500 text-sm">
                 "O profissional não quer apenas o cliente, ele quer uma carreira estruturada."
               </div>
            </div>
            
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              <InfoCard 
                icon={<Calendar className="w-8 h-8" />}
                title="Gestão Operacional"
                items={[
                  "Agenda integrada ao fluxo de pedidos.",
                  "Calendário inteligente de serviços.",
                  "Sistema de lembretes e alarmes logísticos.",
                  "Organização de rotas por região."
                ]}
              />
              <InfoCard 
                icon={<Wallet className="w-8 h-8" />}
                title="Gestão Financeira"
                items={[
                  "Controle rigoroso de entradas e saídas.",
                  "Dashboard de valores a receber.",
                  "Relatórios semanais e mensais de performance.",
                  "Integração futura com contabilidade."
                ]}
              />
              <InfoCard 
                icon={<FileText className="w-8 h-8" />}
                title="Ferramentas Profissionais"
                items={[
                  "Emissão de orçamentos personalizados.",
                  "Formalização do trabalho via app.",
                  "Gestão de base de clientes recorrentes.",
                  "Emissão de notas fiscais (roadmap)."
                ]}
              />
              <div className="p-8 rounded-[2.5rem] bg-primary text-white flex flex-col justify-center items-center text-center">
                 <h4 className="text-2xl font-black mb-4 uppercase">Benefício Cliente</h4>
                 <p className="text-white/80 text-sm leading-relaxed mb-6">Agilidade na resposta, contato direto, menos fricção e transparência total.</p>
                 <button className="bg-white text-primary px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl">Ver Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MERCADO: OS NÚMEROS REAIS */}
      <section id="mercado" className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-6">Market Size (TAM)</h3>
                <h2 className="text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
                  40.3 Milhões de <br/><span className="text-primary">Oportunidades.</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                  Quase 40% da força de trabalho no Brasil opera sem estrutura. O brasileiro já está habituado a trabalhar via apps (Uber/iFood) — nós apenas trouxemos a gestão.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                      <p className="text-4xl font-black text-primary">103M</p>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-2">Pessoas Ocupadas (BR)</p>
                   </div>
                   <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                      <p className="text-4xl font-black text-white">26M</p>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-2">Trabalhadores Conta Própria</p>
                   </div>
                </div>
             </div>
             
             <div className="h-[450px] w-full bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-xl">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marketData} layout="vertical" margin={{ left: 20, right: 30 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={180} 
                      axisLine={false} 
                      tickLine={false} 
                      style={{ fontSize: '11px', fontWeight: '900', fill: '#94a3b8', textTransform: 'uppercase' }}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '20px', color: '#fff' }}
                    />
                    <Bar dataKey="value" radius={[0, 15, 15, 0]} barSize={50}>
                      {marketData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-end">
                   <div>
                      <p className="text-xs font-black text-white/40 uppercase tracking-widest">Benchmark Estratégico</p>
                      <p className="text-slate-400 text-sm mt-1">Uber: +1M motoristas | iFood: +300k entregadores</p>
                   </div>
                   <div className="text-right">
                      <p className="text-primary font-black">IBGE 2024</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. MONETIZAÇÃO E ESCALA */}
      <section id="monetizacao" className="py-24">
        <div className="section-container">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-4">Business Model</h3>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Fluxos de Receita.</h2>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: "Assinatura SaaS", icon: <ShieldCheck />, d: "Mensalidade justa para acesso a clientes e ferramentas de gestão.", c: "primary" },
                { t: "Smart Advertising", icon: <Target />, d: "Publicidade baseada em intenção real de consumo (ex: reforma -> tintas).", c: "slate-900" },
                { t: "B2B & Educação", icon: <Award />, d: "Cursos certificados dentro do app com marcas parceiras.", c: "primary" },
                { t: "Fintech (Expansion)", icon: <DollarSign />, d: "Crédito especializado e antecipação de recebíveis.", c: "slate-900" }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[3rem] border border-black/5 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
                   <div className={`w-14 h-14 rounded-2xl bg-${item.c} text-white flex items-center justify-center mb-6`}>{item.icon}</div>
                   <h4 className="font-black text-slate-900 uppercase text-sm mb-4">{item.t}</h4>
                   <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
           
           <div className="mt-16 bg-primary p-12 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              <div className="relative z-10 md:w-1/2">
                 <h3 className="text-3xl font-black mb-6">A Matemática do Investidor</h3>
                 <p className="text-white/80 mb-8 italic">“Se capturarmos apenas 1% do mercado de autônomos no Brasil:”</p>
                 <div className="space-y-4">
                    <div className="flex justify-between font-black uppercase text-xs tracking-widest border-b border-white/10 pb-4">
                       <span>Market Share 1%</span>
                       <span>400.000 Profissionais</span>
                    </div>
                    <div className="flex justify-between font-black uppercase text-xs tracking-widest border-b border-white/10 pb-4">
                       <span>Assinatura Avg</span>
                       <span>R$ 30,00 / mês</span>
                    </div>
                    <div className="flex justify-between font-black uppercase text-3xl tracking-tighter pt-4">
                       <span>Potencial ARR</span>
                       <span>R$ 144.000.000</span>
                    </div>
                 </div>
              </div>
              <div className="relative z-10 md:w-1/2 h-[300px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={projectionData}>
                       <defs>
                          <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#fff" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#fff" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <Area type="monotone" dataKey="value" stroke="#fff" fillOpacity={1} fill="url(#colorVal)" strokeWidth={4} />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>
        </div>
      </section>

      {/* 6. EXPANSÃO: O MAPA */}
      <section id="visao" className="py-24 bg-slate-50 overflow-hidden">
        <div className="section-container">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-4">Plano de Expansão</h3>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Roadmap Estratégico.</h2>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8">
              {roadmap.map((item, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-white border border-black/5 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all">
                   <div className="text-7xl font-black text-slate-100 absolute top-0 right-0 p-4 -mr-4 -mt-4 transition-colors group-hover:text-primary/5">{item.year}</div>
                   <div className="relative z-10">
                      <div className="px-4 py-1.5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-6">
                        {item.region}
                      </div>
                      <h4 className="text-xl font-black text-slate-900 mb-4">{item.cities}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.insight}</p>
                      <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Audiência</span>
                         <span className="text-lg font-black text-primary">{item.stats}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="mt-20 glass-card p-12 flex flex-col items-center text-center">
              <Globe className="w-16 h-16 text-primary mb-8" />
              <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase">A Visão Final</h3>
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium italic">
                “A Trampio não quer ser apenas um app de serviços. Quer ser o sistema operacional do profissional autônomo. O lugar onde ele encontra clientes, organiza sua operação, gerencia seu financeiro e evolui profissionalmente.”
              </p>
           </div>
        </div>
      </section>

      {/* FOOTER: CTA FINAL */}
      <footer className="py-32 bg-slate-950 text-white relative">
        <div className="section-container text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">
                Vamos organizar o trabalho<br /><span className="text-primary">do futuro?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="pitch-button text-xl px-12 py-5 uppercase tracking-widest">Agendar Call</button>
                 <button className="px-12 py-5 rounded-2xl border border-white/20 font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Baixar Sumário Executivo</button>
              </div>
              <p className="mt-24 text-white/20 text-xs font-black uppercase tracking-[0.3em]">
                Trampio &copy; 2026 &bull; Floripa &bull; Brazil
              </p>
           </motion.div>
        </div>
      </footer>

    </div>
  );
}

// --- ICONS ADICIONAIS ---
const XCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);
