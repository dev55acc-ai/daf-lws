import { Hero } from "@/components/Hero";
import { FeeSignature } from "@/components/FeeSignature";
import { ProofPoints } from "@/components/ProofPoints";
import { NotSoftware } from "@/components/NotSoftware";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeeSignature />
      <ProofPoints />
      <NotSoftware />
      <Footer />
    </main>
  );
}
