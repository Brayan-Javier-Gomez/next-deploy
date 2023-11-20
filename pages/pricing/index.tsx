import { Inter } from "next/font/google";
import { MainLayout } from "@/components/layouts/MainLayout";
import { LightLayout } from "@/components/layouts/LightLayout";
const inter = Inter({ subsets: ["latin"] });

export default function PricingPage() {
  return (
    <MainLayout>
      <LightLayout>
        <h1>Pagina del pricings</h1>
      </LightLayout>
    </MainLayout>
  );
}