import { BedDouble, Bath, Car, Ruler, type LucideIcon } from "lucide-react"

export const property = {
  title: "Casa Residencial Moderna",
  location: "Bairro Jardim, São Paulo - SP",
  price: "R$ 2.500",
  priceLabel: "Aluguel mensal",
  status: "Para alugar",
  description:
    "Excelente casa térrea com ambientes amplos, ótima iluminação natural e pronta para morar. Localizada em rua silenciosa, próxima a supermercados, farmácias e com fácil acesso ao transporte público. Perfeita para quem busca conforto e praticidade.",
  phone: "5511999999999",
  whatsappMessage:
    "Olá! Tenho interesse na Casa Residencial Moderna e gostaria de agendar uma visita.",
}

export const whatsappUrl =
  `https://wa.me/${property.phone}?text=` + encodeURIComponent(property.whatsappMessage)

export const specs: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: BedDouble, label: "Quartos", value: "3" },
  { icon: Bath, label: "Banheiros", value: "2" },
  { icon: Car, label: "Vagas", value: "2" },
  { icon: Ruler, label: "Área", value: "120 m²" },
]

export const features = [
  "Cozinha com armários planejados",
  "Suíte máster com guarda-roupa",
  "Área de serviço individual",
  "Churrasqueira e espaço gourmet",
  "Quintal privativo nos fundos",
  "Conexão pronta para internet/TV",
  "Portão eletrônico instalado",
  "Permitido animais de estimação",
]

export const gallery = [
  { src: "/images/casa-fachada.png", alt: "Fachada da casa com jardim e garagem para dois carros" },
  { src: "/images/casa-interior.png", alt: "Sala de estar ampla e iluminada" },
  { src: "/images/casa-cozinha.png", alt: "Cozinha com armários planejados" },
  { src: "/images/casa-quarto.png", alt: "Suíte máster com guarda-roupa embutido" },
  { src: "/images/casa-gourmet.png", alt: "Área gourmet com churrasqueira e quintal" },
]
