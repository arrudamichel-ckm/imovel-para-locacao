import Image from "next/image"
import { MapPin, MessageCircle } from "lucide-react"
import { property, specs, whatsappUrl } from "@/lib/property"

export function Hero() {
  return (
    <section id="topo" className="relative">
      <div className="relative aspect-[4/3] w-full sm:aspect-[21/9]">
        <Image
          src="/images/casa-fachada.png"
          alt="Fachada da Casa Residencial Moderna com jardim e vagas na garagem"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 sm:pb-12">
            <span className="inline-flex rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-foreground">
              {property.status}
            </span>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold text-balance text-background sm:text-5xl">
              {property.title}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-background/90 sm:text-base">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {property.location}
            </p>
          </div>
        </div>
      </div>

      {/* Barra de resumo */}
      <div className="mx-auto -mt-8 w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:flex-row sm:items-center sm:justify-between">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
            {specs.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-muted text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-base font-semibold text-foreground">{value}</span>
                  <span className="block text-xs text-muted-foreground">{label}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between gap-6 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {property.priceLabel}
              </p>
              <p className="text-2xl font-bold text-brand sm:text-3xl">{property.price}</p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Agendar visita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
