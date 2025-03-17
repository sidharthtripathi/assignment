import { ContactForm } from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import { PricingTable } from "@/components/PricingTablte";
import ServiceCard from "@/components/ServiceCard";

export default function LandingPage(){
    return (
        <div>
            <HeroSection/>
            <ServiceCard/>
            <PricingTable/>
            <ContactForm/>
        </div>
    )
}