import { MessageCircle } from "lucide-react";
import { trackConversion } from "@/lib/utils"; // Import the function

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    trackConversion(); // Call the conversion tracking function
    const message = encodeURIComponent("Hello! I want to get my Digital Book ID for reading platform access. Please help me get started.");
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 animate-pulse flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    </div>
  );
}
