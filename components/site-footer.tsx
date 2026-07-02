import { Home } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <a href="#topo" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
            <Home className="size-4" aria-hidden="true" />
          </span>
          Imóvel Prime
        </a>
        <p>© {new Date().getFullYear()} Imóvel Prime. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
