"use client";

import React from "react";
import Image from "next/image";
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
  Award,
  XCircle,
  TrendingDown,
  Activity,
  ArrowUpRight,
  Clock,
  Layers,
  Layout
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
  Area,
  PieChart as RePieChart,
  Pie
} from 'recharts';

// --- DATA ---
const marketData = [
  { name: 'Ocupados (BR)', value: 103, color: '#e2e8f0' },
  { name: 'Informais', value: 40, color: '#ff5a00' },
  { name: 'Autônomos', value: 26, color: '#ff8a50' },
];

const investmentAllocation = [
  { name: 'Produto', value: 240, color: '#ff5a00' },
  { name: 'Aquisição', value: 180, color: '#ff8a50' },
  { name: 'Comercial', value: 100, color: '#ffb38a' },
  { name: 'Infra', value: 60, color: '#cbd5e1' },
  { name: 'Reserva', value: 70, color: '#94a3b8' },
];

const conversionPremises = [
  { stage: 'Visitante → Cadastro', conservative: '8%', optimistic: '12%' },
  { stage: 'Cadastro → Ativo', conservative: '25%', optimistic: '35%' },
  { stage: 'Ativo → Pagante', conservative: '20%', optimistic: '30%' },
];

const projection12Months = [
  { name: 'Conservador', users: '300-400', mrr: 'R$ 12k - 16k', color: '#94a3b8' },
  { name: 'Otimista', users: '1.000-1.200', mrr: 'R$ 40k - 48k', color: '#ff5a00' },
];

// --- COMPONENTS ---

const SectionTitle = ({ subtitle, title, dark = false }: any) => (
  <div className="mb-16">
    <motion.h3 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={`text-xs font-black uppercase tracking-[0.3em] mb-4 text-primary`}
    >
      {subtitle}
    </motion.h3>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] ${dark ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const FeatureCard = ({ icon, title, description, items = [], color = "primary" }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col"
  >
    <div className={`w-14 h-14 rounded-2xl bg-${color}/10 text-${color} flex items-center justify-center mb-8`}>
      {icon}
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed mb-6">{description}</p>
    {items.length > 0 && (
      <ul className="space-y-3 mt-auto">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex gap-3 text-xs font-bold text-slate-600">
            <CheckCircle2 className={`w-4 h-4 text-${color} shrink-0`} />
            {item}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

export default function Presentation() {
  return (
    <div className="bg-white min-h-screen selection:bg-primary/20 font-sans">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/images/logolpreta.png" 
              alt="Trampio Logo" 
              width={180} 
              height={50} 
              className="h-10 w-auto object-contain scale-[1.8] origin-left"
              priority
            />
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#parte1" className="hover:text-primary transition-colors">1. Produto & Tese</a>
            <a href="#parte2" className="hover:text-primary transition-colors">2. Mercado & Escala</a>
            <a href="#parte3" className="hover:text-primary transition-colors">3. Investimento</a>
          </div>
          <button className="pitch-button text-[10px] px-8 py-3 uppercase tracking-widest hidden sm:flex">
            Pitch Deck 2026
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -mr-40 -mt-40 animate-pulse-soft" />
        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-10">
              <Rocket className="w-4 h-4" /> Trampio: Versão Investidor
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black text-slate-900 tracking-tighter leading-[0.85] mb-12">
              Não somos mais um marketplace.<br />
              Somos a <span className="premium-gradient-text">Ferramenta de Trabalho.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 leading-tight max-w-3xl font-medium mb-16">
              “A Trampio nasce para remover a fricção que impede o autônomo de operar como um negócio real.”
            </p>
            <div className="flex flex-wrap gap-8">
              <button className="pitch-button text-xl px-12 py-6">
                Ver Tese de Investimento <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                      <Users className="w-5 h-5 text-slate-400" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tight">40 Milhões</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Aguardando Estrutura</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARTE 1: PRODUTO & TESE */}
      <section id="parte1" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="section-container">
          <SectionTitle subtitle="Parte 01" title="Origem, Problema e Diferencial" />

          {/* 1.1 ORIGEM */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-primary/10 rounded-[4rem] blur-3xl opacity-50" />
              <div className="relative glass-card p-12 bg-white flex flex-col justify-center">
                <Lightbulb className="w-16 h-16 text-primary mb-10" />
                <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">A Trampio nasce de uma dor real.</h3>
                <div className="space-y-6 text-xl text-slate-600 leading-relaxed italic">
                  <p>“Antes de desenvolver a plataforma, eu atuei como prestador de serviço e vivi diretamente:”</p>
                  <ul className="space-y-4 not-italic">
                    {[
                      "Dificuldade de conseguir clientes com previsibilidade",
                      "Desorganização total da agenda",
                      "Falta de controle financeiro básico"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 text-base font-bold text-slate-900">
                        <AlertCircle className="w-6 h-6 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="pt-6 border-t border-black/5 text-primary font-black not-italic text-2xl">
                    O problema não era só encontrar cliente... era conseguir operar como profissional.
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="space-y-12">
              <div>
                <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-6">O Diagnóstico</h3>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-8 leading-none">Hoje, o modelo de marketplace falhou.</h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Soluções como GetNinjas validaram que existe demanda, mas criaram um gargalo artificial que gera frustração e abandono.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Risco Financeiro", desc: "Profissional paga por lead sem garantia de fechamento.", icon: <TrendingDown /> },
                  { title: "Baixa Previsibilidade", desc: "Sem controle de demanda ou fluxo estável.", icon: <Activity /> },
                  { title: "Gargalo Operacional", desc: "Atraso na resposta ao cliente pela decisão de 'comprar'.", icon: <Clock /> },
                  { title: "Zero Ferramental", desc: "Não ajuda na operação ou no dia a dia do negócio.", icon: <Layers /> }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 1.2 A RESPOSTA TRAMPIO */}
          <div className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-6">A Solução</h3>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8">A Resposta da Trampio</h2>
              <p className="text-xl text-slate-500 font-medium italic">“Não como mais um marketplace. Mas como uma ferramenta de trabalho.”</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Calendar className="w-8 h-8" />}
                title="Para o Profissional"
                description="Ele passa a operar como um negócio estruturado."
                items={["Agenda e organização", "Gestão financeira", "Relatórios de performance", "Controle de demanda"]}
              />
              <FeatureCard 
                icon={<Search className="w-8 h-8" />}
                title="Para o Cliente"
                description="Experiência de contratação fluida e direta."
                items={["Resposta mais rápida", "Menos fricção no fluxo", "Contratação direta", "Transparência total"]}
              />
              <div className="lg:col-span-1 p-12 rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-10 opacity-10"><Zap className="w-32 h-32 text-primary" /></div>
                <h3 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Diferencial Central</h3>
                <h4 className="text-3xl font-black mb-8 leading-tight">Enquanto o modelo atual cria fricção... <br/><span className="text-primary">A Trampio remove.</span></h4>
                <div className="space-y-4">
                   <div className="flex items-center gap-4 py-3 border-b border-white/10">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <p className="text-sm font-bold uppercase tracking-tighter">Assinatura vs Lead Pago</p>
                   </div>
                   <div className="flex items-center gap-4 py-3 border-b border-white/10">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <p className="text-sm font-bold uppercase tracking-tighter">Previsibilidade vs Risco</p>
                   </div>
                   <div className="flex items-center gap-4 py-3 border-b border-white/10">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <p className="text-sm font-bold uppercase tracking-tighter">Plataforma vs Ferramenta Limitada</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-16 rounded-[3.5rem] bg-white border border-black/5 shadow-2xl text-center">
             <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Posicionamento Estratégico</h3>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic">
               “A Trampio não está competindo para conectar. <br className="hidden md:block" /> Está competindo para <span className="premium-gradient-text underline decoration-primary/20 underline-offset-8">estruturar o trabalho.</span>”
             </h2>
          </div>
        </div>
      </section>

      {/* PARTE 2: MERCADO & EXPANSÃO */}
      <section id="parte2" className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="section-container relative z-10">
          <SectionTitle subtitle="Parte 02" title="Mercado e Expansão" dark />

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-10">O Cenário Brasileiro</h3>
              <p className="text-3xl font-black tracking-tight mb-12 leading-tight">
                “Quase metade da força de trabalho no Brasil não tem estrutura.”
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Ocupados", val: "+103M", desc: "População total" },
                  { label: "Informais", val: "~40M", desc: "Sem estrutura" },
                  { label: "Autônomos", val: "~26M", desc: "Conta própria" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                    <p className="text-3xl font-black text-primary mb-2">{stat.val}</p>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-[10px] font-bold text-slate-500 italic">{stat.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex items-center gap-6 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
                <p className="text-sm font-medium text-slate-300">O comportamento já foi validado por Uber e iFood. O usuário já aceita e depende do modelo digital.</p>
              </div>
            </div>
            <div className="h-[500px] bg-white/5 rounded-[3rem] border border-white/10 p-10 flex flex-col">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-10">Distribuição da Força de Trabalho</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} style={{ fontSize: '10px', fontWeight: '900', fill: '#94a3b8', textTransform: 'uppercase' }} />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '15px' }} />
                  <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                    {marketData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-[10px] font-black uppercase tracking-widest text-white/20 mt-8">Fonte: IBGE / Estudo Trampio 2024</p>
            </div>
          </div>

          {/* ESTRATEGIA GEOGRAFICA */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-6">Execution Roadmap</h3>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">O Caminho da Escala</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { 
                  year: "2026", 
                  title: "Validação (SC)", 
                  desc: "Foco em SC: Florianópolis, BC, Blumenau, Joinville.", 
                  insight: "Alta atividade econômica + Baixo desemprego.",
                  stats: "+2M pessoas",
                  color: "bg-success"
                },
                { 
                  year: "2027", 
                  title: "Expansão Sul", 
                  desc: "Paraná e Rio Grande do Sul (Curitiba, Porto Alegre).", 
                  insight: "Cultura de serviços consolidada no Sul.",
                  stats: "30M habitantes",
                  color: "bg-warning"
                },
                { 
                  year: "2028", 
                  title: "Escala Sudeste", 
                  desc: "São Paulo, Rio de Janeiro e Minas Gerais.", 
                  insight: "Onde o volume atinge o ápice nacional.",
                  stats: "+90M habitantes",
                  color: "bg-primary"
                }
              ].map((step, i) => (
                <div key={i} className="group relative p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all overflow-hidden">
                  <div className={`absolute top-0 right-0 px-6 py-2 rounded-bl-3xl ${step.color} text-black text-[11px] font-black uppercase tracking-widest`}>
                    {step.year}
                  </div>
                  <h4 className="text-2xl font-black mb-6 text-white">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{step.desc}</p>
                  <div className="p-6 bg-black/40 rounded-2xl border border-white/5 mb-10">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Insight</p>
                    <p className="text-xs text-slate-300 font-medium italic">{step.insight}</p>
                  </div>
                  <div className="flex justify-between items-center pt-8 border-t border-white/10">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Base Relevante</span>
                    <span className="text-lg font-black text-white">{step.stats}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TAM CALCULATOR */}
          <div className="p-16 rounded-[4rem] bg-primary text-white flex flex-col lg:flex-row items-center gap-16 shadow-3xl">
            <div className="lg:w-1/2">
               <h3 className="text-xs font-black text-black/40 uppercase tracking-[0.3em] mb-10">TAM (Total Addressable Market)</h3>
               <h2 className="text-5xl font-black tracking-tighter mb-12">Capture 1% e mude o jogo.</h2>
               <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-white/20 pb-4">
                     <span className="text-sm font-black uppercase text-white/60">Target: 40M Informais</span>
                     <span className="text-2xl font-black">1% = 400.000 users</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/20 pb-4">
                     <span className="text-sm font-black uppercase text-white/60">Ticket Médio (SaaS)</span>
                     <span className="text-2xl font-black">R$ 30,00 / mês</span>
                  </div>
                  <div className="flex justify-between items-end pt-6">
                     <span className="text-lg font-black uppercase">Receita Mensal Potencial</span>
                     <span className="text-5xl font-black text-black">R$ 12M</span>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 h-[350px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={[
                    { x: 0, y: 1 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 60 }, { x: 4, y: 100 }
                  ]}>
                    <defs>
                      <linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#000" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="y" stroke="#000" strokeWidth={5} fill="url(#colorY)" />
                  </AreaChart>
               </ResponsiveContainer>
               <p className="text-center text-xs font-black uppercase tracking-widest mt-10 text-black/50 italic">
                “O mercado já existe. O comportamento já existe. O que falta é estrutura.”
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTE 3: INVESTIMENTO & NÚMEROS */}
      <section id="parte3" className="py-24 md:py-32 bg-white relative">
        <div className="section-container">
          <SectionTitle subtitle="Parte 03" title="Investimento e Números" />

          {/* 3.1 PROPOSTA */}
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
            <div className="lg:col-span-5">
              <div className="p-12 rounded-[3.5rem] bg-slate-50 border border-black/5 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-12 opacity-5"><DollarSign className="w-40 h-40" /></div>
                <h3 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-10">The Deal</h3>
                <div className="space-y-12 relative z-10">
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Aporte Solicitado</p>
                      <p className="text-6xl font-black text-slate-900 tracking-tighter">R$ 650k</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Equity Oferecido</p>
                      <p className="text-6xl font-black text-slate-900 tracking-tighter">20%</p>
                   </div>
                   <div className="pt-8 border-t border-black/5 flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                         <Clock className="w-8 h-8" />
                      </div>
                      <div>
                         <p className="text-sm font-black text-slate-900">Runway: 12 meses</p>
                         <p className="text-xs text-slate-500 font-bold uppercase">Foco total em validação e tração</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
               <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-10">Uso do Capital</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {[
                    { label: "Produto", val: "R$ 240k", desc: "Fundador + Dev Sênior (R$ 20k/mês)" },
                    { label: "Aquisição", val: "R$ 180k", desc: "Tráfego pago + Validação de CAC" },
                    { label: "Comercial / Ativação", val: "R$ 100k", desc: "Onboarding manual + Ativação local" },
                    { label: "Infra & Operação", val: "R$ 60k", desc: "Servidores + Ferramentas" },
                    { label: "Reserva de Risco", val: "R$ 70k", desc: "Variação de CAC + Ajustes" }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all">
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                          <span className="text-sm font-black text-primary">{item.val}</span>
                       </div>
                       <p className="text-xs text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
               <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={investmentAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={8}
                        dataKey="value"
                      >
                        {investmentAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RePieChart>
                  </ResponsiveContainer>
               </div>
            </div>
          </div>

          {/* 3.2 PREMISSAS & METRICAS */}
          <div className="grid lg:grid-cols-2 gap-16 mb-32">
             <div>
                <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-10">Premissas de Conversão</h3>
                <div className="rounded-[2.5rem] border border-black/5 overflow-hidden shadow-xl">
                   <table className="w-full text-left">
                      <thead className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                         <tr>
                            <th className="px-8 py-6">Etapa</th>
                            <th className="px-8 py-6 text-center">Conservador</th>
                            <th className="px-8 py-6 text-center">Otimista</th>
                         </tr>
                      </thead>
                      <tbody className="text-sm font-bold text-slate-600">
                         {conversionPremises.map((item, i) => (
                           <tr key={i} className="border-b border-black/5 hover:bg-slate-50">
                              <td className="px-8 py-6">{item.stage}</td>
                              <td className="px-8 py-6 text-center text-slate-400">{item.conservative}</td>
                              <td className="px-8 py-6 text-center text-primary">{item.optimistic}</td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
                <div className="mt-8 p-8 rounded-3xl bg-primary/5 border border-primary/10">
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Benchmarks</p>
                   <p className="text-sm text-slate-600 leading-relaxed font-medium">Baseado em marketplaces early stage e SaaS freemium de alta recorrência.</p>
                </div>
             </div>
             <div className="space-y-8">
                <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-10">Unit Economics Estimados</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="stat-card">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6">
                         <Target className="w-5 h-5" />
                      </div>
                      <p className="text-4xl font-black text-slate-900 tracking-tighter mb-2">R$ 50-120</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">CAC Estimado</p>
                   </div>
                   <div className="stat-card">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6">
                         <Activity className="w-5 h-5" />
                      </div>
                      <p className="text-4xl font-black text-slate-900 tracking-tighter mb-2">8-12%</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Churn Inicial</p>
                   </div>
                </div>
                <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-20"><ShieldCheck className="w-20 h-20 text-primary" /></div>
                   <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">Motivo da Retenção</p>
                   <p className="text-sm font-medium leading-relaxed italic">“Quanto mais o profissional usa, mais ele depende. O custo de saída aumenta com o acúmulo de dados, histórico financeiro e agenda.”</p>
                </div>
             </div>
          </div>

          {/* 3.3 PROJEÇÕES */}
          <div className="mb-32">
             <div className="text-center mb-20">
                <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-6">Projeção 12 Meses</h3>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">O Primeiro Ano</h2>
             </div>
             <div className="grid md:grid-cols-2 gap-8">
                {projection12Months.map((proj, i) => (
                  <div key={i} className="p-12 rounded-[3.5rem] bg-white border-2 border-black/5 shadow-2xl hover:border-primary/20 transition-all group">
                     <h4 className={`text-2xl font-black uppercase mb-10 ${proj.name === 'Otimista' ? 'text-primary' : 'text-slate-400'}`}>{proj.name}</h4>
                     <div className="space-y-8">
                        <div>
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Usuários Pagantes</p>
                           <p className="text-5xl font-black text-slate-900 tracking-tighter">{proj.users}</p>
                        </div>
                        <div className="pt-8 border-t border-black/5">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">MRR (Receita Mensal)</p>
                           <p className="text-5xl font-black text-primary tracking-tighter">{proj.mrr}</p>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
             <div className="mt-12 p-10 rounded-[2.5rem] bg-slate-50 border border-black/5 flex flex-col md:flex-row items-center gap-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                   <Search className="w-8 h-8" />
                </div>
                <div>
                   <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">A empresa se sustenta após 12 meses?</h4>
                   <p className="text-slate-500 font-medium italic">
                    Conservador: ❌ ainda não. Otimista: ✅ próximo do break-even. <br/>
                    O primeiro ano não é sobre lucro. É sobre validar: aquisição, retenção e comportamento.
                   </p>
                </div>
             </div>
          </div>

          {/* 3.4 LONGO PRAZO */}
          <div className="grid lg:grid-cols-2 gap-8 mb-32">
             <div className="p-12 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Globe className="w-32 h-32 text-primary" /></div>
                <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-10">Visão 2027</h4>
                <p className="text-2xl font-black mb-4">Região Sul</p>
                <p className="text-4xl font-black text-primary tracking-tighter mb-8">R$ 100k - R$ 250k MRR</p>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">2.000 a 5.000 Usuários</p>
                <div className="mt-8 px-6 py-3 bg-success/20 text-success rounded-full text-[10px] font-black uppercase tracking-widest inline-block border border-success/30">
                  ✅ Empresa Sustentável
                </div>
             </div>
             <div className="p-12 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Rocket className="w-32 h-32 text-primary" /></div>
                <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-10">Visão 2028</h4>
                <p className="text-2xl font-black mb-4">Expansão Sudeste</p>
                <p className="text-4xl font-black text-primary tracking-tighter mb-8">R$ 480k - R$ 900k MRR</p>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">8.000 a 15.000 Usuários</p>
                <div className="mt-8 px-6 py-3 bg-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-widest inline-block border border-primary/30">
                  🚀 Escala Nacional
                </div>
             </div>
          </div>

          {/* CLOSING */}
          <div className="text-center max-w-4xl mx-auto">
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="p-20 rounded-[4rem] bg-slate-900 text-white shadow-3xl relative overflow-hidden"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
                <Award className="w-20 h-20 text-primary mx-auto mb-12" />
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 leading-none">
                  “O investimento não compra só crescimento. Compra <span className="text-primary">velocidade de aprendizado.</span>”
                </h2>
                <p className="text-xl text-slate-400 font-medium italic mb-16 max-w-2xl mx-auto">
                  E é isso que define quem ganha esse mercado.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <button className="pitch-button text-2xl px-16 py-8">VAMOS NESSA?</button>
                   <button className="px-16 py-8 rounded-3xl border border-white/20 text-xl font-bold hover:bg-white/5 transition-all">Sumário Executivo</button>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-slate-950 border-t border-white/5 text-center">
         <Image 
            src="/images/logolpreta.png" 
            alt="Trampio Logo" 
            width={150} 
            height={40} 
            className="h-8 w-auto object-contain mx-auto mb-10 invert opacity-40"
         />
         <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
           Trampio &copy; 2026 &bull; Floripa &bull; Brazil &bull; Todos os direitos reservados
         </p>
      </footer>

    </div>
  );
}
