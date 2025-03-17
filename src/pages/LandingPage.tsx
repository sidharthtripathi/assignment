import { ContactForm } from "@/components/ContactForm";
import {HeroSection} from "@/components/HeroSection";
import { PricingTable } from "@/components/PricingTablte";
import { ServiceSection } from "@/components/ServiceCard";

export default function LandingPage(){
    return (
        <div className="container mx-auto">
            <HeroSection/>
            <ServiceSection/>
            <PricingTable/>
            <ContactForm/>
        </div>
    )
}