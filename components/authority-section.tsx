import Image from "next/image"
import { Shield, Target, Users, Award } from "lucide-react"

const stats = [
  {
    icon: Shield,
    value: "100%",
    label: "Segurança",
    desc: "Decisões baseadas em dados e evidências",
  },
  {
    icon: Target,
    value: "1000+",
    label: "Alunos",
    desc: "Transformações reais e comprovadas",
  },
  {
    icon: Users,
    value: "24/7",
    label: "Suporte",
    desc: "Acompanhamento contínuo via WhatsApp",
  },
  {
    icon: Award,
    value: "20+",
    label: "Anos",
    desc: "Experiência profissional no mercado",
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
        <div className="flex flex-col items-center">
          {/* Main Title Area */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-black uppercase tracking-[0.4em] text-[#E53935]">
              Autoridade Comprovada
            </span>
            <h2 className="font-condensed text-4xl font-black uppercase italic leading-tight text-white sm:text-6xl text-balance">
              Equilíbrio entre <span className="text-[#E53935]">Ciência</span> e Experiência
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
              Mais de duas décadas refinando a estratégia perfeita para quem busca o máximo desempenho e resultados reais.
            </p>
          </div>

          {/* Stats grid - Redesigned for impact without image */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label, desc }) => (
              <div
                key={label}
                className="group relative flex flex-col items-center gap-5 overflow-hidden rounded-[2.5rem] border border-white/[0.05] bg-white/[0.02] p-8 text-center backdrop-blur-md transition-all duration-500 hover:border-[#E53935]/30 hover:bg-white/[0.04]"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#E53935]/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />

                <div className="relative inline-flex items-center justify-center rounded-2xl bg-[#E53935]/10 p-4 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#E53935]/15">
                  <Icon className="h-6 w-6 text-[#E53935]" />
                </div>

                <div className="space-y-1">
                  <span className="block text-4xl font-black tracking-tight text-white sm:text-5xl">
                    {value}
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E53935] sm:text-xs">
                    {label}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-white/40">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#planos"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#E53935] px-10 py-4 text-base font-black uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#C62828] hover:shadow-[#E53935]/40"
            >
              <span className="relative z-10">Falar com o Especialista</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 -translate-x-full group-hover:translate-x-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
