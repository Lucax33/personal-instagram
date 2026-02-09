import Image from "next/image"
import { MessageCircle, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-auto overflow-hidden bg-[#0F0F0F] pb-4">
      {/* Background person image - matches reference style */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-person.png"
          alt="Personal Trainer Profissional"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays for blending into dark theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0F0F]/70 to-[#0F0F0F]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent" />
        <div className="absolute inset-0 bg-[#0F0F0F]/30" />
      </div>

      {/* Red glow accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E53935]/10 blur-[120px] md:h-96 md:w-96"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl text-center">
          {/* Glass badge */}
          <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md sm:text-xs md:mb-6">
            Acompanhamento Profissional
          </span>

          <h1 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            Transforme seus{" "}
            <span className="text-[#E53935]">resultados</span>
            <br className="hidden sm:block" />
            {" "}com um plano feito
            <br className="hidden sm:block" />
            {" "}para voce
          </h1>

          <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-white/50 sm:mt-3 sm:text-base">
            Acompanhamento profissional, estrategia clara e resultados reais.
            Invista no seu melhor desempenho.
          </p>

          {/* CTA buttons */}
          <div className="mt-4 flex flex-col items-center justify-center gap-2 pb-0 sm:flex-row md:mt-6">
            <a
              href="#planos"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#E53935] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E53935]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C62828] hover:shadow-xl sm:w-auto sm:text-base"
            >
              Ver planos disponiveis
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=553191632614&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20acompanhamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] sm:w-auto sm:text-base"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#planos"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30 transition-colors hover:text-white/60"
          aria-label="Rolar para planos"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
