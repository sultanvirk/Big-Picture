import AboutUs from "./components/AboutUs";
import AccreditationLogos from "./components/AccreditationLogos";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import DoctorSection from "./components/DoctorSection";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Big Picture Pediatric Dentistry",
    description: "Thoughtful pediatric dentistry for children and families in the Houston area.",
    telephone: "+1-346-230-2811",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17150 El Camino Real",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77058",
      addressCountry: "US",
    },
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffdf9]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <DoctorSection />
      <AccreditationLogos />
      <Footer />
    </main>
  );
}
