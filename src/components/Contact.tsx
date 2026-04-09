import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-beige/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rose-gold font-bold tracking-widest uppercase text-sm">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-8">
              Visit Our <span className="text-rose-gold italic">Luxury Studio</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-rose-gold shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-muted-foreground">123 Beauty Lane, Luxury Plaza, Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-rose-gold shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call or WhatsApp</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-rose-gold shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-muted-foreground">info@alveera.com</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all shadow-sm">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all shadow-sm">
                <Facebook size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all shadow-sm">
                <MessageCircle size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            {/* Simulated Google Maps Embed */}
            <div className="w-full h-full bg-muted relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 max-w-xs">
                  <div className="w-12 h-12 bg-rose-gold rounded-full flex items-center justify-center text-white shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Alveera Beauty Parlour</h5>
                    <p className="text-xs text-muted-foreground">Luxury Plaza, Mumbai</p>
                    <a href="#" className="text-rose-gold text-[10px] font-bold uppercase mt-2 block">Get Directions</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
