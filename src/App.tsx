import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { BridalSpecial } from "./components/BridalSpecial";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { Pricing } from "./components/Pricing";
import { BookingForm } from "./components/BookingForm";
import { Blog } from "./components/Blog";
import { VideoSection } from "./components/VideoSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { DiscountBanner } from "./components/DiscountBanner";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-rose-gold selection:text-white">
      <DiscountBanner />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BridalSpecial />
        <Pricing />
        <Gallery />
        <Testimonials />
        <VideoSection />
        <Blog />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
