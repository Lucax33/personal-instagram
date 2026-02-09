export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] py-8">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
