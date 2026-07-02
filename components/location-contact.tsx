import { MapPin, MessageCircle } from "lucide-react"
import { property, whatsappUrl } from "@/lib/property"

export function LocationContact() {
  return (
    <section id="localizacao" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Mapa */}
        <div className="overflow-hidden rounded-3xl border border-border bg-muted">
          <iframe
            title={`Mapa da localização: ${property.location}`}
            src="https://www.google.com/maps?q=Jardim+Paulista+Sao+Paulo+SP&output=embed"
            className="h-full min-h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-center rounded-3xl bg-brand p-8 text-brand-foreground sm:p-10">
          <p className="flex items-center gap-1.5 text-sm text-brand-foreground/80">
            <MapPin className="size-4" aria-hidden="true" />
            {property.location}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-balance sm:text-3xl">
            Gostou? Agende uma visita sem compromisso
          </h2>
          <p className="mt-3 leading-relaxed text-brand-foreground/85">
            Fale com a gente pelo WhatsApp e escolha o melhor horário para conhecer a casa
            pessoalmente. Respondemos rápido!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-whatsapp px-6 py-4 text-lg font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Agendar uma visita
          </a>
        </div>
      </div>
    </section>
  )
}
