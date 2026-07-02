import Image from "next/image"
import { gallery } from "@/lib/property"

export function Gallery() {
  return (
    <section id="galeria" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Conheça cada ambiente</h2>
      <p className="mt-2 text-muted-foreground">Fotos reais dos espaços internos e externos do imóvel.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((photo, index) => (
          <div
            key={photo.src}
            className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
              index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto" : ""
            }`}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
