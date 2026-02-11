import Image from "next/image"
import { MessageCircle, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-auto min-h-[200px] overflow-hidden bg-[#0F0F0F] pb-4 md:min-h-0">
      {/* Background person image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-person.png"
          alt="Personal Trainer Profissional"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        {/* Gradient optimised for text-over-torso visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/10 via-transparent to-[#0F0F0F] z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent z-0" />
      </div>

      {/* Content - Pushed down to start from the Torso - Optimized for 3 plans visibility */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-[42vh] -mb-2 sm:pt-[45vh] sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Glass badge - premium */}
          <span className="glass-premium mb-1 inline-block rounded-full px-3 py-1 text-[8px] font-bold uppercase tracking-[0.25em] text-white/90 sm:text-xs">
            Acompanhamento Profissional
          </span>

          <h1 className="font-condensed text-2xl font-black uppercase italic leading-[0.9] tracking-tight text-white/95 sm:text-5xl md:text-6xl lg:text-7xl text-balance drop-shadow-2xl">
            Transforme seus{" "}
            <span className="text-[#E53935] drop-shadow-[0_0_25px_rgba(229,57,53,0.6)]">resultados</span>
            <br className="hidden sm:block" />
            {" "}com um plano feito
            <br className="hidden sm:block" />
            {" "}para você
          </h1>

          <p className="mx-auto mt-2 max-w-lg text-[11px] leading-relaxed text-white/70 font-medium drop-shadow-md hidden sm:block">
            Estratégia clara e resultados reais para o seu desempenho.
          </p>

          {/* CTA buttons */}
          <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:flex-row md:mt-8 md:gap-4">
            <a
              href="#planos"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#E53935] px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-[#E53935]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#C62828] hover:shadow-2xl sm:w-auto sm:px-8 sm:py-3 sm:text-sm md:text-base"
            >
              <span className="relative z-10">Ver planos</span>
              <div className="absolute inset-0 -z-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full -translate-x-full" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=553191632614&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20acompanhamento."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-premium inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/[0.08] sm:w-auto sm:px-8 sm:py-3 sm:text-sm md:text-base"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-white/10" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll indicator - hidden on small vertical screens */}
        <a
          href="#planos"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce transition-colors text-white/20 hover:text-[#E53935]/80 hidden sm:block"
          aria-label="Rolar para planos"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
