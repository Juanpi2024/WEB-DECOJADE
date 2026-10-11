import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import MobileBar from "@/components/MobileBar";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://web-decojade.vercel.app"),
  alternates: { canonical: "/" },
  title: {
    default: "DecoJade | Vivero de plantas de jade en Parral",
    template: "%s | DecoJade",
  },
  description:
    "Vivero de plantas de jade (Crassula ovata) en Parral, Región del Maule. Siete formatos desde $1.000, cultivados desde el esqueje en maceteros de yeso de producción propia. Venta al detalle y por mayor.",
  keywords: [
    "planta de jade", "crassula ovata", "árbol del dinero", "vivero Parral",
    "plantas Maule", "feng shui", "suculentas Chile", "bonsái jade",
    "plantas por mayor Chile",
  ],
  authors: [{ name: "DecoJade" }],
  openGraph: {
    title: "DecoJade | Vivero de plantas de jade en Parral",
    description:
      "Siete formatos de jade cultivados desde el esqueje en Parral. Desde $1.000 hasta ejemplares de más de 50 cm montados como jardín bonsái.",
    type: "website",
    locale: "es_CL",
    siteName: "DecoJade",
    images: [{ url: "/vivero_hero.jpg", width: 1592, height: 872, alt: "Vivero DecoJade en Parral" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DecoJade | Vivero de plantas de jade en Parral",
    description: "Siete formatos de jade cultivados desde el esqueje en Parral, Región del Maule.",
    images: ["/vivero_hero.jpg"],
  },
};

export const viewport = {
  themeColor: "#1F3324",
};

// Datos estructurados: le dice a Google que esto es un negocio local con dirección.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GardenStore",
  name: "DecoJade",
  description:
    "Vivero de plantas de jade (Crassula ovata) en Parral, Región del Maule.",
  url: "https://web-decojade.vercel.app",
  telephone: "+56984668005",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Tarapacá 17",
    addressLocality: "Parral",
    addressRegion: "Región del Maule",
    addressCountry: "CL",
  },
  sameAs: ["https://instagram.com/decojade"],
  image: "https://web-decojade.vercel.app/vivero_hero.jpg",
  logo: "https://web-decojade.vercel.app/logo_decojade.jpg",
  priceRange: "$1.000 – $25.000+",
  currenciesAccepted: "CLP",
  paymentAccepted: "Efectivo, transferencia bancaria",
  areaServed: { "@type": "City", name: "Parral" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plantas de jade",
    url: "https://web-decojade.vercel.app/catalogo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-bone-100 focus:text-forest-900 focus:px-5 focus:py-3 focus:rounded-full focus:font-semibold"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
        <MobileBar />
        {/* Visitas, páginas, de dónde llegan y desde qué dispositivo.
            Plan gratuito de Vercel: 50.000 eventos al mes. */}
        <Analytics />
      </body>
    </html>
  );
}
