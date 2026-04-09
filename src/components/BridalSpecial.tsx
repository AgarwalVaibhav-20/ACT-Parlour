import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const packages = [
  {
    name: "Royal Bridal Package",
    price: "₹25,000",
    features: [
      "HD Bridal Makeup",
      "Premium Hair Styling",
      "Saree/Dupatta Draping",
      "Nail Art & Extensions",
      "Pre-Bridal Facial",
      "Body Polishing",
    ],
  },
  {
    name: "Classic Bridal Package",
    price: "₹15,000",
    features: [
      "Traditional Bridal Makeup",
      "Elegant Hair Styling",
      "Saree Draping",
      "Basic Nail Art",
      "Gold Facial",
      "Threading & Waxing",
    ],
  },
];

export function BridalSpecial() {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <section id="bridal" className="py-24 bg-beige/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={isAfter ? "after" : "before"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={
                    isAfter
                      ? "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                  }
                  alt={isAfter ? "After Makeup" : "Before Makeup"}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex bg-white/90 backdrop-blur rounded-full p-1 shadow-lg">
                <button
                  onClick={() => setIsAfter(false)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                    !isAfter ? "bg-rose-gold text-white" : "text-rose-gold"
                  }`}
                >
                  BEFORE
                </button>
                <button
                  onClick={() => setIsAfter(true)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                    isAfter ? "bg-rose-gold text-white" : "text-rose-gold"
                  }`}
                >
                  AFTER
                </button>
              </div>
            </div>
            
            {/* Decorative Gold Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/30 rounded-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rose-gold font-bold tracking-widest uppercase text-sm">Bridal Special</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-8">
              Your Dream Wedding <br />
              <span className="text-rose-gold italic text-3xl md:text-4xl">Starts With Us</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Every bride deserves to look like royalty on her wedding day. Our specialized bridal team uses premium products and techniques to create a look that is uniquely yours.
            </p>

            <div className="space-y-8">
              {packages.map((pkg) => (
                <div key={pkg.name} className="bg-white p-8 rounded-2xl shadow-sm border border-rose-gold/5 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold font-heading">{pkg.name}</h3>
                    <span className="text-2xl font-bold text-rose-gold">{pkg.price}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-rose-gold" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-8 bg-rose-gold hover:bg-rose-gold/90 text-white rounded-full">
                    Inquire Now
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
