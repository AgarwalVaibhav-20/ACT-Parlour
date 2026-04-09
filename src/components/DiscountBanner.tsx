import { motion } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";

export function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-rose-gold text-white py-2 px-4 relative z-[60] text-center"
    >
      <p className="text-xs md:text-sm font-bold tracking-wider">
        ✨ FESTIVE OFFER: Get 20% OFF on all Bridal Packages this Wedding Season! ✨
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
}
