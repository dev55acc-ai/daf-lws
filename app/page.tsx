import { Hero } from "@/components/Hero";
import { FeeSignature } from "@/components/FeeSignature";
import { ProofPoints } from "@/components/ProofPoints";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeeSignature />
      <ProofPoints />
      <Footer />
    </main>
  );
}
