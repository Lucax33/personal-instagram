import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Transforme Seus Resultados | Planos Profissionais",
  description:
    "Acompanhamento profissional, estrategia clara e resultados reais. Escolha o plano ideal para sua transformacao.",
}

export const viewport: Viewport = {
  themeColor: "#E53935",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
