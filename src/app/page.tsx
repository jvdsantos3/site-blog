import { LandingPage } from "@/templates/landing-page";
import { url } from "inspector";
import { title } from "process";

export const metadata = {
  title: "Site.Set",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://site-blog-eight.vercel.app/og-image.jpg",
  },
};

export default function HomePage() {
  return <LandingPage />;
}
