"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=553191632614&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1EBE57] transition-all duration-300 hover:scale-110 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  )
}
