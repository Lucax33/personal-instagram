'use client'

import {
  CheckCircle2,
  Calendar,
  Trophy,
  CalendarDays,
  Pill,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    icon: Pill,
    title: "Acompanhamento Farmacoterapeutico",
    price: "130",
    period: "/consulta",
    status: "VAGAS",
    features: [
      "Analise de medicamentos",
      "Otimizacao do tratamento",
      "Reducao de riscos",
      "Consulta individual",
    ],
    url: "https://app.primecoaching.com.br/checkout/plan/23664",
    highlight: false,
  },
  {
    icon: Calendar,
    title: "Plano Mensal",
    price: "200",
    period: "/mês",
    status: "",
    features: [
      "Treino personalizado",
      "Ajustes semanais",
      "Suporte via WhatsApp",
      "Avaliacao mensal",
    ],
    url: "https://app.primecoaching.com.br/checkout/plan/21482",
    highlight: false,
  },
  {
    icon: CalendarDays,
    title: "Plano Semestral",
    price: "700",
    period: "/6 meses",
    status: "POPULAR",
    features: [
      "Tudo do plano mensal",
      "Economia de 42%",
      "Suporte prioritario",
      "Avaliacoes bimestrais",
    ],
    url: "https://app.primecoaching.com.br/checkout/plan/21868",
    highlight: false,
  },
  {
    icon: Trophy,
    title: "Plano Anual",
    price: "1.000",
    period: "/ano",
    status: "MAIS POPULAR",
    features: [
      "Tudo do plano mensal",
      "Economia de 58%",
      "Prioridade no atendimento",
      "Bonus exclusivos",
      "Avaliacao fisica completa",
    ],
    url: "https://app.primecoaching.com.br/checkout/plan/21869",
    highlight: true,
    badge: "VIP",
  },
]

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative w-full"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500
          ${plan.highlight
            ? "border-[#E53935]/25 bg-white/[0.10] shadow-[0_0_30px_rgba(229,57,53,0.08)]"
            : "border-white/10 bg-white/[0.06]"
          }
          hover:bg-white/[0.14] hover:border-white/20 hover:shadow-[0_4px_30px_rgba(255,255,255,0.05)]`}
      >
        {/* Header: Title + Price */}
        <div className="flex items-start justify-between px-4 pt-3.5 pb-2 md:px-8 md:pt-7 md:pb-4">
          <div className="flex flex-col min-w-0">
            <h3 className="text-sm md:text-xl font-black text-white uppercase italic tracking-tight leading-tight">
              {plan.title}
            </h3>
            {plan.status && (
              <div className="mt-1 inline-flex items-center gap-1 text-[7px] md:text-[10px] font-black uppercase text-[#E53935] bg-[#E53935]/5 w-fit px-1.5 py-0.5 rounded-full border border-[#E53935]/10">
                <span className="h-1 w-1 rounded-full bg-[#E53935] animate-pulse" />
                {plan.status}
              </div>
            )}
          </div>
          <div className="flex flex-col items-end shrink-0 ml-3">
            <div className="flex items-baseline gap-0.5">
              <span className="text-[10px] md:text-sm font-bold text-white/25 italic">R$</span>
              <span className="text-xl md:text-4xl font-black text-white tracking-tight leading-none">
                {plan.price}
              </span>
            </div>
            <span className="text-[7px] md:text-[11px] font-bold text-white/20 uppercase tracking-widest">
              {plan.period}
            </span>
          </div>
        </div>

        {/* Benefits */}
        <div className="px-4 pt-1 pb-2 md:px-8 md:py-5">
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 md:grid-cols-2 md:gap-y-2">
            {plan.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-1">
                <CheckCircle2 className="h-2.5 w-2.5 md:h-4 md:w-4 text-[#E53935] shrink-0 opacity-50" />
                <span className="text-[9px] md:text-sm font-semibold text-white/50 leading-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-4 pb-3.5 md:px-8 md:pb-7">
          <a
            href={plan.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-xl py-2.5 md:py-4 transition-all duration-300 active:scale-[0.98]
              ${plan.highlight
                ? "bg-[#E53935] text-white shadow-lg shadow-[#E53935]/20 hover:bg-[#C62828]"
                : "bg-white/[0.08] text-white border border-white/10 hover:bg-white/[0.14]"
              }`}
          >
            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest">
              Começar agora
            </span>
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4 opacity-60 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}


export function PricingSection() {
  return (
    <section id="planos" className="relative z-20 -mt-4 bg-transparent pb-10 pt-0">
      <div className="container relative z-10 mx-auto px-4 max-w-2xl">
        {/* Section header */}
        <div className="mb-2 flex flex-col items-center text-center md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1 text-[8px] font-black uppercase tracking-widest text-[#E53935] mb-1 md:text-xs shadow-lg">
            <span className="h-1 w-1 rounded-full bg-[#E53935] animate-ping" />
            Planos & Consultas
          </div>
          <h2 className="text-xl md:text-4xl font-black text-white uppercase italic tracking-tighter">
            Escolha seu <span className="text-[#E53935]">Caminho</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2.5 md:gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
