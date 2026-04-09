import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-md text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat with us
      </span>
    </motion.a>
  );
}
