import { Instagram, Facebook, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-beige pt-16 pb-8 border-t border-rose-gold/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-heading font-bold text-rose-gold tracking-wider">
                ALVEERA
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground -mt-1">
                Ladies Beauty Parlour
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Enhancing your natural beauty with premium skincare and professional styling. Experience luxury and comfort at Alveera.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-rose-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-rose-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-rose-gold transition-colors">Services</a></li>
              <li><a href="#bridal" className="hover:text-rose-gold transition-colors">Bridal Special</a></li>
              <li><a href="#pricing" className="hover:text-rose-gold transition-colors">Price List</a></li>
              <li><a href="#gallery" className="hover:text-rose-gold transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-rose-gold">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-rose-gold transition-colors">Bridal Makeup</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Hair Styling</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Facials & Skincare</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Manicure & Pedicure</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Waxing & Threading</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-rose-gold">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-rose-gold shrink-0" size={18} />
                <span className="text-muted-foreground">123 Beauty Lane, Luxury Plaza, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-rose-gold shrink-0" size={18} />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="text-rose-gold shrink-0" size={18} />
                <span className="text-muted-foreground">+91 98765 43210 (WhatsApp)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-rose-gold shrink-0" size={18} />
                <span className="text-muted-foreground">info@alveera.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-rose-gold/10 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Alveera Ladies Beauty Parlour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
