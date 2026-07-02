import { Home, MessageCircle } from "lucide-react"
import { whatsappUrl } from "@/lib/property"

const navItems = [
  { label: "Fotos", href: "#galeria" },
  { label: "Detalhes", href: "#detalhes" },
  { label: "Comodidades", href: "#comodidades" },
  { label: "Localização", href: "#localizacao" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-brand-foreground">
            <Home className="size-5" aria-hidden="true" />
          </span>
          Imóvel Prime
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">Contato</span>
        </a>
      </div>
    </header>
  )
}
