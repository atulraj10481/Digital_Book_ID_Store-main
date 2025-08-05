import { Button } from "@/components/ui/button";
import { MessageCircle, UserCheck, Book, Search, Bookmark, Library } from "lucide-react";
import { trackConversion } from "@/lib/utils"; // Import the function

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Sign up for a Digital Book ID account",
      description: "Begin by contacting us on our official whatsapp account. The process simply requires you to fill in some details, send the message, and start your reading journey.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      number: "2",
      icon: Search,
      title: "Browse our extensive library of books",
      description: "You can choose from a wide variety of genres, from fiction to non-fiction, and everything in between.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      number: "3",
      icon: Book,
      title: "Select the desired book",
      description: "After zeroing in on the desired book, you can move further to select a chapter, or start from the beginning.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      number: "4",
      icon: Bookmark,
      title: "Start reading",
      description: "In this step, you are required to work on your choice. No worries, as we offers interesting deals in all events which help you in making conscious decisions.",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      number: "5",
      icon: Library,
      title: "Build your personal library",
      description: "Once you select your choice, it is time to start reading. You can read with complete passion and get lost in the world of books.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      number: "6",
      icon: UserCheck,
      title: "Read and Compete",
      description: " Now it's time to read! Aim for a high score, beat your personal best, and see how you rank against other readers.",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const handleWhatsAppClick = () => {
    trackConversion(); // Call the conversion tracking function
    const message = encodeURIComponent("Hello! I want to start the Digital Book ID registration process.");
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How to start reading <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">with Digital Book ID</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            The process is so simple that a new user with zero prior experience can also start reading with us easily by below given simple steps:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] h-full shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <step.icon className="text-white text-2xl" size={24} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Get Your Book ID
          </Button>
        </div>
      </div>
    </section>
  );
}
