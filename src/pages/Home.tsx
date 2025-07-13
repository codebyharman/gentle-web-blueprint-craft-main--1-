import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown, Flame, Heart, Star, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center relative overflow-visible"
      >
        <HeroSlideshow />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-5" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <ScrollReveal animation="scaleIn">
            <div className="bg-gradient-to-br from-black/10 via-black/5 to-transparent backdrop-blur-[2px] rounded-3xl p-8 md:p-16 border border-white/30 shadow-2xl overflow-visible">
              <h1 className="text-[2.7rem] md:text-[5.4rem] font-extrabold mb-8 leading-[1.3] tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 animate-pulse drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  जय बाबा जित्तो जी
                </span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 animate-pulse drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  जय बुआ कोड़ी जी
                </span>
              </h1>

              <ScrollReveal animation="fadeInUp" delay={800}>
                <p
                  className="text-xl md:text-3xl text-white font-bold mb-8"
                  style={{
                    textShadow:
                      "0 0 20px rgba(255, 215, 0, 0.8), 2px 2px 6px rgba(0,0,0,0.8)",
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.6))",
                  }}
                >
                  भक्तों के कष्ट हरने वाले, मनोकामना पूर्ण करने वाले
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fadeInUp" delay={1200}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href="https://www.instagram.com/jhiri_mela/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="font-semibold">Instagram पर फॉलो करें</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@jhiri_mela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-rotate-1"
                  >
                    <Youtube className="h-6 w-6" />
                    <span className="font-semibold">YouTube चैनल देखें</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Flame
            className="h-10 w-10 text-orange-400 opacity-90"
            style={{ filter: "drop-shadow(0 0 10px rgba(255, 165, 0, 0.8))", animationDuration: "3s" }}
          />
        </div>
        <div className="absolute top-32 right-20 animate-pulse">
          <Star
            className="h-8 w-8 text-yellow-400 opacity-90"
            style={{ filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))", animationDuration: "2s" }}
          />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: "1s", animationDuration: "4s" }}>
          <Star
            className="h-6 w-6 text-red-400 opacity-90"
            style={{ filter: "drop-shadow(0 0 8px rgba(255, 99, 71, 0.8))" }}
          />
        </div>
        <div
          className="absolute top-1/2 right-10 animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "3s" }}
        >
          <Heart
            className="h-8 w-8 text-pink-400 opacity-90"
            style={{ filter: "drop-shadow(0 0 10px rgba(255, 182, 193, 0.8))" }}
          />
        </div>

        {/* Scroll indicator */}
        <Link
          to="/mata-ke-bheti"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-yellow-300 animate-bounce z-20"
        >
          <ChevronDown size={40} strokeWidth={2.5} />
        </Link>
      </section>
    </div>
  );
};

export default Home; 