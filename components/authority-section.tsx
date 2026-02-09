import Image from "next/image"
import { Shield, Target, Users, Award } from "lucide-react"

const stats = [
  {
    icon: Shield,
    value: "100%",
    label: "Seguranca",
    desc: "Decisoes baseadas em dados e evidencias",
  },
  {
    icon: Target,
    value: "500+",
    label: "Clientes",
    desc: "Transformacoes reais e comprovadas",
  },
  {
    icon: Users,
    value: "24/7",
    label: "Suporte",
    desc: "Acompanhamento continuo via WhatsApp",
  },
  {
    icon: Award,
    value: "10+",
    label: "Anos",
    desc: "Experiencia profissional no mercado",
  },
]

export function AuthoritySection() {
  return (
    <section className="relative overflow-hidden bg-[#0F0F0F] py-16 md:py-24">
      {/* Subtle red glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E53935]/[0.05] blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Image column */}
          <div className="relative w-full max-w-xs shrink-0 sm:max-w-sm lg:w-[360px]">
            <div className="relative">
              {/* Glow behind */}
              <div
                className="absolute inset-0 -z-10 translate-y-6 scale-90 rounded-full bg-[#E53935]/15 blur-[80px]"
                aria-hidden="true"
              />
              {/* Glass frame */}
              <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-2 backdrop-blur-sm">
                <Image
                  src="/trainer-gym.jpg"
                  alt="Personal Trainer na academia - mais de 10 anos de experiência"
                  width={360}
                  height={480}
                  className="h-auto w-full rounded-2xl object-cover"
                  sizes="(max-width: 768px) 280px, 360px"
                />
              </div>
              {/* Floating glass badge - enhanced */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#E53935]/30 bg-[#1C1C1C]/95 px-6 py-2.5 text-sm font-bold text-white shadow-xl shadow-[#E53935]/20 backdrop-blur-xl sm:text-base">
                <span className="text-[#E53935] font-extrabold">10+</span> anos de experiência
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="flex-1 text-center lg:text-left">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935] sm:text-sm">
              Por que nos escolher
            </span>
            <h2 className="text-2xl font-extrabold leading-tight text-white text-balance sm:text-3xl md:text-4xl">
              Profissionalismo, clareza e{" "}
              <span className="text-[#E53935]">resultado</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base lg:mx-0">
              Cada plano foi pensado para entregar estrategia, acompanhamento e
              decisoes seguras. Nada generico. Tudo personalizado.
            </p>

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-10">
              {stats.map(({ icon: Icon, value, label, desc }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#E53935]/20 hover:bg-white/[0.07] sm:p-5 lg:items-start lg:text-left"
                >
                  <div className="inline-flex items-center justify-center rounded-xl bg-[#E53935]/10 p-2.5 transition-colors duration-300 group-hover:bg-[#E53935]/15">
                    <Icon className="h-4 w-4 text-[#E53935] sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-xl font-extrabold text-white sm:text-2xl">
                    {value}
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/70 sm:text-xs">
                    {label}
                  </p>
                  <p className="text-[10px] leading-relaxed text-white/40 sm:text-xs">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center lg:text-left">
              <a
                href="#planos"
                className="inline-flex items-center justify-center rounded-full bg-[#E53935] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E53935]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C62828] hover:shadow-xl sm:text-base"
              >
                Escolher meu plano
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
