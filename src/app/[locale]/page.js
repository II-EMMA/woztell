import ChatGPTAndWhatsApp from "@/sections/chatgptAndWhatsapp/ChatGPTAndWhatsApp";
import CloudApi from "@/sections/CloudAPI/CloudApi";
import Contact from "@/sections/contact/Contact";
import ConversationalCommerce from "@/sections/ConversationalCommerce/ConversationalCommerce";
import CustomerSupport from "@/sections/customerSupport/CustomerSupport";
import Hero from "@/sections/hero/Hero";
import Integrate from "@/sections/integrate/Integrate";
import MarketingAndSales from "@/sections/marketingAndSales/MarketingAndSales";
import Projects from "@/sections/projects/Projects";
import Trust from "@/sections/trust/Trust";
import Why from "@/sections/why/Why";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Trust />
      <MarketingAndSales />
      <CustomerSupport />
      <ConversationalCommerce />
      <ChatGPTAndWhatsApp />
      <CloudApi />
      <Integrate />
      <Why />
      <Projects />
      <Contact />
    </main>
  );
}
