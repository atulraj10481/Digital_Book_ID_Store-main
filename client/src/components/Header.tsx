import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { trackConversion } from "@/lib/utils"; // Import the function

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const handleWhatsAppClick = () => {
    trackConversion(); // Call the conversion tracking function
    const message = encodeURIComponent("Hello! I want to get my Digital Book ID and start reading. Please help me get started.");
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#features", label: "Features", isAnchor: true },
    { href: "#contact", label: "Contact", isAnchor: true },
    { href: "/terms-conditions", label: "Terms" },
    { href: "/privacy-policy", label: "Privacy" }
  ];

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">DIGITAL BOOK ID</span>
              <span className="text-xs text-blue-400 tracking-widest hidden sm:block">Your Gateway to Knowledge</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.isAnchor ? (
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className={`text-gray-300 hover:text-blue-400 transition-colors ${
                      location === link.href ? 'text-blue-400' : ''
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-gray-300 hover:text-blue-400 transition-colors ${
                      location === link.href ? 'text-blue-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get ID Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.isAnchor ? (
                    <button
                      onClick={() => {
                        scrollToSection(link.href.substring(1));
                        setIsMenuOpen(false);
                      }}
                      className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors w-full text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get ID Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
