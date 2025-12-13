import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "DecoJade | Plantas de Jade - Árbol del Dinero y Prosperidad",
  description: "Especialistas en plantas de Jade (Crassula ovata). Descubre el Árbol del Dinero en todos los tamaños: bebé, mediano, bonsái y grande. Atrae prosperidad y buena suerte con Feng Shui.",
  keywords: "planta de jade, crassula ovata, árbol del dinero, feng shui, prosperidad, suculenta, bonsái jade, planta de la fortuna",
  authors: [{ name: "DecoJade" }],
  openGraph: {
    title: "DecoJade | Plantas de Jade - Árbol del Dinero",
    description: "Especialistas en plantas de Jade. Atrae prosperidad y buena suerte a tu hogar.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
