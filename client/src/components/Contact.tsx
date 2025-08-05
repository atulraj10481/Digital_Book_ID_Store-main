import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send, Clock, Shield } from "lucide-react";
import { trackConversion } from "@/lib/utils"; // Import the function

export default function Contact() {
  const { toast } = useToast();
  const [platform, setPlatform] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const handleWhatsAppClick = () => {
    trackConversion(); // Call the conversion tracking function
    const message = encodeURIComponent("Hello! I want to get my Digital Book ID and would like to speak with support.");
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleTelegramClick = () => {
    const telegramChannel = import.meta.env.VITE_TELEGRAM_CHANNEL || "digitalbookid";
    window.open(`https://t.me/${telegramChannel}`, '_blank');
  };

  const onSubmit = (data: any) => {
    console.log("Form submitted:", { ...data, platform });
    toast({
      title: "Success!",
      description: "Your contact form has been submitted successfully. We'll get back to you soon!",
    });
    reset();
    setPlatform("");
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How to create your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Digital Book ID</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            We believe in a clean and easy account registration process that anybody can follow without any hassle.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">WhatsApp Support</h4>
                    <p className="text-gray-400">Instant messaging for quick assistance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
                  <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                    <Send className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Telegram Channel</h4>
                    <p className="text-gray-400">Join our community for updates</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
                  <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center">
                    <Clock className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">24/7 Availability</h4>
                    <p className="text-gray-400">Round-the-clock support team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Get Your Book ID
              </Button>
              <Button
                onClick={handleTelegramClick}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl"
              >
                <Send className="mr-3 h-6 w-6" />
                Join Telegram Channel
              </Button>
            </div>
          </div>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Quick Contact Form</CardTitle>
              <p className="text-gray-600">Fill out the form below to get your Digital Book ID</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{(errors.name as any).message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-900">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400"
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{(errors.phone as any).message}</p>
                  )}
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2 text-gray-900">
                    Preferred Genre
                  </Label>
                  <Select value={platform} onValueChange={setPlatform}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-blue-400">
                      <SelectValue placeholder="Select genre..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      <SelectItem value="fiction">Fiction</SelectItem>
                      <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                      <SelectItem value="sci-fi">Science Fiction</SelectItem>
                      <SelectItem value="fantasy">Fantasy</SelectItem>
                      <SelectItem value="mystery">Mystery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-black px-8 py-4 text-lg font-bold rounded-2xl"
                >
                  {isSubmitting ? "Submitting..." : "Get My Digital Book ID"}
                </Button>
              </form>
              <p className="text-sm text-gray-600 mt-6 text-center flex items-center justify-center">
                <Shield className="inline mr-2 h-4 w-4" />
                Your information is secure and will not be shared with third parties.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
