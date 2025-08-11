import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/modules/about";
import Contact from "@/modules/contact";
import Faq from "@/modules/faqs";
import Hero from "@/modules/hero";
import Service from "@/modules/services";
import Testimonial from "@/modules/testimonials";
import Work from "@/modules/works";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Work />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
