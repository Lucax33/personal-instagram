import Image from "next/image"
import { Award, ShieldCheck } from "lucide-react"

export function CertificateSection() {
    return (
        <section className="relative overflow-hidden bg-[#0F0F0F] py-12 md:py-16">
            <div className="relative mx-auto max-w-2xl px-4">
                {/* Glass card */}
                <div className="glass flex flex-col items-center gap-6 rounded-3xl p-6 text-center sm:p-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#E53935]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#E53935]">
                        <ShieldCheck className="h-4 w-4" />
                        Certificação Oficial
                    </div>

                    {/* Certificate image */}
                    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-xl">
                        <Image
                            src="/certificado-sbpt.png"
                            alt="Certificado SBPT - Sociedade Brasileira de Personal Trainers"
                            width={400}
                            height={280}
                            className="h-auto w-full rounded-xl object-contain"
                        />
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-2 text-lg font-bold text-white sm:text-xl">
                        <Award className="h-5 w-5 text-[#E53935]" />
                        Certificado pela Sociedade Brasileira de Personal
                    </div>

                    {/* Description */}
                    <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                        O <span className="font-semibold text-white">Dr. Márcio Rodrigues</span> é um profissional certificado,
                        garantindo que seu acompanhamento segue os mais rigorosos padrões de qualidade e ciência do treinamento físico no Brasil.
                    </p>

                    {/* Trust badge */}
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#E53935]/30 bg-[#E53935]/10 px-5 py-2 text-sm font-bold text-white">
                        <ShieldCheck className="h-4 w-4 text-[#E53935]" />
                        Treine com segurança, treine com quem tem credibilidade.
                    </div>
                </div>
            </div>
        </section>
    )
}
