import { HeroSection } from "@/components/hero-section"
import { PricingSection } from "@/components/pricing-section"
import { AuthoritySection } from "@/components/authority-section"
import { CertificateSection } from "@/components/certificate-section"
import { CtaSection } from "@/components/cta-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <PricingSection />
      <AuthoritySection />
      <CertificateSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
