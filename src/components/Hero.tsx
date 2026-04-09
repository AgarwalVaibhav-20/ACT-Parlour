import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop"
            alt="Salon Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beige/90 via-beige/40 to-transparent" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-rose-gold text-white rounded-full">
              Premium Beauty Experience
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-foreground leading-[1.1] mb-6">
              Glow Like <br />
              <span className="text-rose-gold italic">Never Before</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Professional beauty & skincare services tailored to enhance your natural radiance. Step into a world of luxury and transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-rose-gold hover:bg-rose-gold/90 text-white px-8 py-7 text-lg rounded-full shadow-lg shadow-rose-gold/20 group">
                Book Appointment
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-rose-gold text-rose-gold hover:bg-rose-gold/5 px-8 py-7 text-lg rounded-full">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-64 h-64 border border-rose-gold/20 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-40 w-32 h-32 bg-soft-pink/30 rounded-full blur-3xl hidden lg:block"
      />
    </section>
  );
}
