import {
  CheckCircle2,
  Calendar,
  Trophy,
  CalendarDays,
  Pill,
  MousePointer2,
} from "lucide-react"

const plans = [
  {
    icon: Pill,
    title: "Acompanhamento Farmacoterapêutico",
    price: "130",
    period: "/consulta",
    features: [
      "Análise de medicamentos",
      "Otimização do tratamento",
      "Redução de riscos",
      "Consulta individual",
    ],
    url: "https://api.whatsapp.com/send?phone=553191632614&text=Ol%C3%A1!%20Tenho%20interesse%20no%20Acompanhamento%20Farmacoterap%C3%AAutico.%20Gostaria%20de%20agendar%20uma%20consulta.",
    highlight: false,
    buttonText: "COMEÇAR AGORA",
  },
  {
    icon: Calendar,
    title: "Plano Mensal",
    price: "200",
    period: "/mês",
    features: [
      "Treino personalizado",
      "Ajustes semanais",
      "Suporte via WhatsApp",
      "Avaliação mensal",
    ],
    url: "https://app.primecoaching.com.br/checkout/plan/21482",
    highlight: false,
    buttonText: "COMEÇAR AGORA",
  },
  {
    icon: CalendarDays,
    title: "Plano Semestral",
    price: "700",
    period: "/6 meses",
    features: [
      "Tudo do plano mensal",
      "Economia de 42%",
      "Suporte prioritário",
      "Avaliações bimestrais",
    ],
    url: "https://app.primecoaching.com.br/checkout/plan/21868",
    highlight: false,
    buttonText: "COMEÇAR AGORA",
  },
  {
    icon: Trophy,
    title: "Plano Anual",
    price: "1.000",
    period: "/ano",
    features: [
      "Tudo do plano mensal",
      "Economia de 58%",
      "Prioridade no atendimento",
      "Bônus exclusivos",
      "Avaliação física completa",
    ],
    url: "https://app.primecoaching.com.br/checkout/plan/21869",
    highlight: true,
    badge: "MAIS POPULAR",
    buttonText: "COMEÇAR AGORA",
  },
]

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const Icon = plan.icon
  return (
    <div
      className={`glass group relative flex w-full flex-row items-center justify-between gap-4 overflow-hidden rounded-3xl p-4 transition-all duration-500 hover:scale-[1.02] hover:bg-white/20 sm:p-6 ${plan.highlight
        ? "border-2 border-[#E53935]/60 bg-white/15 shadow-[0_0_40px_rgba(229,57,53,0.2)]"
        : ""
        }`}
    >
      {plan.badge && (
        <div className="absolute -top-0 right-4 whitespace-nowrap rounded-b-lg bg-[#E53935] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-lg shadow-[#E53935]/30">
          {plan.badge}
        </div>
      )}

      {/* Icon */}
      <div
        className={`hidden shrink-0 items-center justify-center rounded-2xl p-3 sm:flex ${plan.highlight ? "bg-[#E53935]/30" : "bg-white/10"
          }`}
      >
        <Icon
          className={`h-7 w-7 ${plan.highlight ? "text-[#E53935]" : "text-white/80"}`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1">
        <h3 className="text-base font-bold text-white sm:text-lg">
          {plan.title}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-white/50">R$</span>
          <span
            className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${plan.highlight ? "text-[#E53935]" : "text-white"
              }`}
          >
            {plan.price}
          </span>
          <span className="text-xs text-white/50">{plan.period}</span>
        </div>
        <ul className="mt-2 hidden flex-wrap gap-x-3 gap-y-1 sm:flex">
          {plan.features.slice(0, 2).map((feature) => (
            <li key={feature} className="flex items-center gap-1.5 text-xs text-white/60">
              <CheckCircle2 className="h-3 w-3 text-[#E53935]/70" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href={plan.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group/btn inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-sm ${plan.highlight
          ? "bg-[#E53935] text-white shadow-lg shadow-[#E53935]/30 hover:bg-[#C62828]"
          : "border border-white/20 bg-white/10 text-white hover:border-[#E53935]/50 hover:bg-[#E53935]/20"
          }`}
      >
        {plan.buttonText}
        <MousePointer2 className="h-4 w-4 rotate-12 transition-transform group-hover/btn:translate-x-0.5" />
      </a>
    </div>
  )
}

export function PricingSection() {
  return (
    <section id="planos" className="relative z-10 bg-[#0F0F0F] pb-12 pt-4">
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 sm:gap-5">
        {plans.map((plan) => (
          <PlanCard key={plan.title} plan={plan} />
        ))}
      </div>
    </section>
  )
}
