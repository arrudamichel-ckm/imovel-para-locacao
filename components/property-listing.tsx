import Image from "next/image"
import {
  MapPin,
  BedDouble,
  Bath,
  Car,
  Ruler,
  CheckCircle2,
  MessageCircle,
} from "lucide-react"

const specs = [
  { icon: BedDouble, label: "3 Quartos" },
  { icon: Bath, label: "2 Banheiros" },
  { icon: Car, label: "2 Vagas" },
  { icon: Ruler, label: "120 m²" },
]

const features = [
  "Cozinha com armários planejados",
  "Suíte máster com guarda-roupa",
  "Área de serviço individual",
  "Churrasqueira e espaço gourmet",
  "Quintal privativo nos fundos",
  "Conexão pronta para internet/TV",
  "Portão eletrônico instalado",
  "Permitido animais de estimação",
]

const whatsappUrl =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent("Olá! Tenho interesse na Casa Residencial Moderna e gostaria de agendar uma visita.")

export function PropertyListing() {
  return (
    <article className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/5">
      {/* Galeria */}
      <div className="relative aspect-[16/10] w-full">
        <Image
          src="/images/casa-fachada.png"
          alt="Fachada da Casa Residencial Moderna com jardim e vagas na garagem"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-foreground">
          Para alugar
        </span>
      </div>

      <div className="p-6 sm:p-8">
        {/* Cabeçalho */}
        <header className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-balance text-foreground sm:text-3xl">
              Casa Residencial Moderna
            </h1>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 text-destructive" aria-hidden="true" />
              Bairro Jardim, São Paulo - SP
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Aluguel mensal
            </p>
            <p className="text-2xl font-bold text-brand sm:text-3xl">R$ 2.500</p>
          </div>
        </header>

        {/* Resumo rápido */}
        <ul className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-muted p-4 sm:grid-cols-4">
          {specs.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-1.5 text-center">
              <Icon className="size-6 text-brand" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </li>
          ))}
        </ul>

        {/* Descrição */}
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Excelente casa térrea com ambientes amplos, ótima iluminação natural e pronta para
          morar. Localizada em rua silenciosa, próxima a supermercados, farmácias e com fácil
          acesso ao transporte público. Perfeita para quem busca conforto e praticidade.
        </p>

        {/* Foto interna */}
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/casa-interior.png"
            alt="Sala de estar ampla e iluminada da casa"
            fill
            sizes="(max-width: 768px) 100vw, 608px"
            className="object-cover"
          />
        </div>

        {/* Diferenciais */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-foreground">O que o imóvel oferece</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="size-4 shrink-0 text-brand" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-whatsapp px-6 py-4 text-lg font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Agendar uma visita
        </a>
      </div>
    </article>
  )
}
