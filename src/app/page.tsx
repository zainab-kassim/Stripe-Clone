import Image from "next/image";
import Herosection from "@/components/shared/Herosection";
import CompaniesLogo from "@/components/ui/CompaniesLogo";
import Services from "@/components/shared/Services";
import ScrollingCards from "@/components/ui/ScrollingCards";
import InsetImage from "@/components/ui/InsetImage";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
    <>
      <Herosection />
      <CompaniesLogo />
      <div className="bg-slate-100 -z-10">
        <Services />
      </div>
      <ScrollingCards />
      <InsetImage />
      <Footer/>
    </>
  );
}
