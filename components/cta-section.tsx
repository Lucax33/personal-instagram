import { MessageCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F0F0F] py-16 md:py-24">
      {/* Red ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E53935]/[0.08] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Glass card */}
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] px-6 py-12 text-center backdrop-blur-xl sm:px-10 md:py-16">
          {/* Inner glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-[#E53935]/[0.06] via-transparent to-transparent"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="text-2xl font-extrabold text-white text-balance sm:text-3xl md:text-4xl lg:text-5xl">
              Pronto para{" "}
              <span className="text-[#E53935]">comecar</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base md:mt-4 md:text-lg">
              Entre em contato agora e de o primeiro passo para a sua
              transformacao. Atendimento rapido e personalizado.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=553191632614&text=Ol%C3%A1!%20Estou%20pronto%20para%20come%C3%A7ar%20minha%20transforma%C3%A7%C3%A3o.%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E53935] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E53935]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C62828] hover:shadow-xl sm:text-base md:mt-8"
            >
              <MessageCircle className="h-5 w-5" />
              Falar comigo no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
