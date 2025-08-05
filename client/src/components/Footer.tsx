import { Link } from "wouter";
import { MessageCircle, Send, Instagram, Shield, ShieldQuestion } from "lucide-react";
import { trackConversion } from "@/lib/utils"; // Import the function

export default function Footer() {
  const handleWhatsAppClick = () => {
    trackConversion(); // Call the conversion tracking function
    const message = encodeURIComponent("Hello! I'm interested in your Digital Book ID services.");
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleTelegramClick = () => {
    const telegramChannel = import.meta.env.VITE_TELEGRAM_CHANNEL || "digitalbookid";
    window.open(`https://t.me/${telegramChannel}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">DIGITAL BOOK ID</span>
                <span className="text-xs text-blue-400 tracking-widest">Your Gateway to Knowledge</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for secure digital book access and ID services. Experience premium reading with complete peace of mind.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </button>
              <button
                onClick={handleTelegramClick}
                className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Send className="h-6 w-6" />
              </button>
              <button className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Digital Book ID</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Ebook access</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Audiobook access</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Personalized recommendations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/terms-conditions" className="text-gray-400 hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Responsible Reading</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">

          {/* ===== START: Disclaimer Section Added ===== */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-400 max-w-4xl mx-auto mb-4 leading-relaxed">
              <strong className="text-gray-200">Disclaimer:</strong> This service provides access to digital books and is intended for personal, non-commercial use only. Please read responsibly.
            </p>
          </div>
          {/* ===== END: Disclaimer Section ===== */}

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Digital Book ID. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Shield className="text-green-400 h-4 w-4" />
                <span className="text-sm text-gray-400">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldQuestion className="text-amber-400 h-4 w-4" />
                <span className="text-sm text-gray-400">Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
