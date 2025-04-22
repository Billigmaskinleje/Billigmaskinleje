import Hero from "@/components/home/hero";
import EquipmentSteps from "@/components/home/Steps";
import TestimonialSection from "@/components/home/testimonialSection";
import { getHomePage } from "@/queries/home";
import HomeAbout from "@/components/home/About";
import EquipmentRental from "@/components/home/equipmentCategories";
import PricingTable from "@/components/home/PricingTable";

export async function generateMetadata() {
  const data = await getHomePage();
  return {
    title: data?.seo?.title
      ? `${data?.seo?.title} | Billig Maskin Leje`
      : "Billig Maskin Leje",
    description: data?.seo?.description,
    keywords: data?.seo?.keywords,
    alternates: {
      canonical: "https://www.billingmaskinleje.dk",
    },
  };
}

export default async function Home() {
  const data = await getHomePage();

  console.log(data);
  return (
    <main>
      {/* Hero section */}
      <Hero data={data.hero} />
      <HomeAbout data={data.aboutUs} />
      <EquipmentRental data={data.equipmentCategories} />
      <EquipmentSteps data={data.projectSteps} />
      <PricingTable data={data.pricingExamples} />
      {/* Testimonial section */}
      <TestimonialSection />
    </main>
  );
}
