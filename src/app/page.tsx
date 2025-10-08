import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const user = await currentUser();
  if (user) redirect("/dashboard");
  return (
    <div className="min-h-screen">
      <HeroHeader />
      <HeroSection />
      <Pricing />
      <FooterSection />
    </div>
  );
};

export default Home;
