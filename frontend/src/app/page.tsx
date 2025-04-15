import Link from "next/link";
import Hero from "@/components/home/hero";
import EquipmentCategories from "@/components/home/equipmentCategories";
import TestimonialSection from "@/components/home/testimonialSection";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <Hero />

      {/* Equipment Categories section */}
      <EquipmentCategories />

      {/* Testimonial section */}
      <TestimonialSection />
    </main>
  );
}
