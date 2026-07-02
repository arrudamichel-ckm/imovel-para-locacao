import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { PropertyDetails } from "@/components/property-details"
import { LocationContact } from "@/components/location-contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Gallery />
        <PropertyDetails />
        <LocationContact />
      </main>
      <SiteFooter />
    </>
  )
}
