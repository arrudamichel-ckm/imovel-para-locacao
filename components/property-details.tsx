import { CheckCircle2 } from "lucide-react"
import { property, features } from "@/lib/property"

export function PropertyDetails() {
  return (
    <div className="bg-muted/40">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        {/* Sobre o imóvel */}
        <section id="detalhes" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Sobre o imóvel</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{property.description}</p>
        </section>

        {/* Comodidades */}
        <section id="comodidades" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">O que o imóvel oferece</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="size-4 shrink-0 text-brand" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
