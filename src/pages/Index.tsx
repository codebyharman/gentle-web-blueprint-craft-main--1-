import { useState } from 'react';
import { Menu, X, Instagram, Youtube, Phone, Mail, MapPin, Heart, Star, Flame, ShoppingBag, Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSlideshow from '@/components/HeroSlideshow';
import PhotoModal from '@/components/PhotoModal';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const images = [
    {
      src: "/lovable-uploads/3b3ce746-7937-4a01-a4ff-8bafba36c639.png",
      alt: "Baba Jitto Ji & Bua Kodi Ji Temple Decorations"
    },
    {
      src: "/lovable-uploads/maa_durga_image1.png", 
      alt: "Maa Durga Divine Image"
    },
    {
      src: "/lovable-uploads/7e26fcf1-fc08-4793-8c01-ccba9cb6afbf.png",
      alt: "Temple Offerings and Decorations"
    },
    {
      src: "/lovable-uploads/9fb7bb00-fd9c-4ed8-999f-b7354a876dc4.png",
      alt: "Jhiri Mela Celebration"
    },
    {
      src: "/lovable-uploads/817e7259-da59-47eb-95cc-d8bb0d15452b.png",
      alt: "Baba Jitto Ji & Bua Kodi Ji Divine Idols"
    },
    {
      src: "/lovable-uploads/ec67e721-06cc-44f3-8d57-9c208658f13f.png",
      alt: "Baba Jitto Ji & Bua Kodi Ji in Divine Attire"
    },
    {
      src: "/lovable-uploads/d39547d9-a45c-4c8f-8f93-c721a0554271.png",
      alt: "Sacred Pond at Jhiri"
    },
    {
      src: "/lovable-uploads/2ae0bdee-8aeb-4625-9fea-5442bae2ee85.png",
      alt: "Divine Portrait of Baba Jitto Ji & Bua Kodi Ji"
    },
    {
      src: "/lovable-uploads/6373a87d-6f4f-4e03-a2b3-d5abd08fd269.png",
      alt: "Devotees at Jhiri Temple"
    },
    {
      src: "/lovable-uploads/affc3342-75db-448b-85a6-a8e59746e543.png",
      alt: "Baba Jitto Ji & Bua Kodi Ji with Mata Durga"
    }
  ];

  const openPhotoModal = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsPhotoModalOpen(true);
  };

  const bhajanVideos = [
    {
      title: "Full Bhajan Maa Sherawali Kanya Da Roop",
      url: "https://www.youtube.com/watch?v=RrmeYNoNAjY",
      embedId: "RrmeYNoNAjY"
    },
    {
      title: "Amar Katha Baba Jitto Ji & Bua Kodi Ji By Des Raj Bhagat (Bajalta)",
      url: "https://www.youtube.com/watch?v=U-mqrazQbEc",
      embedId: "U-mqrazQbEc"
    },
    {
      title: "AARTI BUA DATI JI & BABA JITTO JI",
      url: "https://www.youtube.com/watch?v=xJLFmmr-aRc",
      embedId: "xJLFmmr-aRc"
    },
    {
      title: "BUA DATI PHULLA WARGI",
      url: "https://youtu.be/HgSHmd-e3n4",
      embedId: "HgSHmd-e3n4"
    },
    {
      title: "KARAK BABA JITTO JI BUA KODI BY GHULAM MOHAMMAD",
      url: "https://www.youtube.com/watch?v=uNIAf7tiBJc",
      embedId: "uNIAf7tiBJc"
    },
    {
      title: "KARAK BABA JITTO JI BY RAM KUMAR JOGI JI",
      url: "https://www.youtube.com/watch?v=BkTMN-QXdRA",
      embedId: "BkTMN-QXdRA"
    },
    {
      title: "KARAK BABA JITTO JI",
      url: "https://www.youtube.com/watch?v=ueSlwgrkozo",
      embedId: "ueSlwgrkozo"
    },
    {
      title: "WANGA CHADA LO KUDIO BUA DATI DE DARBAR DIYA",
      url: "https://www.youtube.com/watch?v=eqovhpdecSk",
      embedId: "eqovhpdecSk"
    },
    {
      title: "Bua Rani Begayi aasan laake",
      url: "https://www.youtube.com/watch?v=_uZO_6zC1ZI",
      embedId: "_uZO_6zC1ZI"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Enhanced Navigation with better colors */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-orange-600/95 via-red-600/95 to-orange-600/95 backdrop-blur-md border-b border-orange-300 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <img 
                  src="/lovable-uploads/81db68a9-9509-4a74-be85-bcedfe831396.png" 
                  alt="JHIRI MELA Logo" 
                  className="h-10 w-10 rounded-full shadow-md"
                />
                <h1 className="text-2xl font-bold text-white drop-shadow-lg">
                  JHIRI MELA
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-orange-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white/10 rounded-lg">Home</a>
                <a href="#mata-ki-bheti" className="text-orange-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white/10 rounded-lg">Mata Ke Bhete</a>
                <a href="#history" className="text-orange-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white/10 rounded-lg">History</a>
                <a href="#media" className="text-orange-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white/10 rounded-lg">Images & Videos</a>
                <a 
                  href="https://jhirimela.online/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white/10 rounded-lg flex items-center gap-1"
                >
                  <ShoppingBag size={16} />
                  Shopping
                </a>
                <a href="#contact" className="text-orange-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white/10 rounded-lg">Contact Us</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-orange-100 hover:text-white focus:outline-none transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-orange-700/95 via-red-700/95 to-orange-700/95 border-t border-orange-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-orange-100 hover:text-white hover:bg-white/10 transition-colors duration-300 rounded-lg">Home</a>
              <a href="#mata-ki-bheti" className="block px-3 py-2 text-orange-100 hover:text-white hover:bg-white/10 transition-colors duration-300 rounded-lg">Mata Ke Bhete</a>
              <a href="#history" className="block px-3 py-2 text-orange-100 hover:text-white hover:bg-white/10 transition-colors duration-300 rounded-lg">History</a>
              <a href="#media" className="block px-3 py-2 text-orange-100 hover:text-white hover:bg-white/10 transition-colors duration-300 rounded-lg">Images & Videos</a>
              <a 
                href="https://jhirimela.online/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 text-orange-100 hover:text-white hover:bg-white/10 transition-colors duration-300 rounded-lg flex items-center gap-1"
              >
                <ShoppingBag size={16} />
                Shopping
              </a>
              <a href="#contact" className="block px-3 py-2 text-orange-100 hover:text-white hover:bg-white/10 transition-colors duration-300 rounded-lg">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section with Animated Text */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-visible">
        <HeroSlideshow />
        
        {/* Slightly lighter overlay with minimal blur for subtle effect */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-5"></div>
        
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
                <p className="text-xl md:text-3xl text-white font-bold mb-8" style={{
                  textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 2px 2px 6px rgba(0,0,0,0.8)',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                }}>
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
        
        {/* Enhanced Floating Elements with Better Animation */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Flame className="h-10 w-10 text-orange-400 opacity-90" style={{
            filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.8))',
            animationDuration: '3s'
          }} />
        </div>
        <div className="absolute top-32 right-20 animate-pulse">
          <Star className="h-8 w-8 text-yellow-400 opacity-90" style={{
            filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))',
            animationDuration: '2s'
          }} />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <Star className="h-6 w-6 text-red-400 opacity-90" style={{
            filter: 'drop-shadow(0 0 8px rgba(255, 99, 71, 0.8))'
          }} />
        </div>
        <div className="absolute top-1/2 right-10 animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }}>
          <Heart className="h-8 w-8 text-pink-400 opacity-90" style={{
            filter: 'drop-shadow(0 0 10px rgba(255, 182, 193, 0.8))'
          }} />
        </div>
        {/* Scroll Down Indicator */}
        <a
          href="#mata-ki-bheti"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-yellow-300 animate-bounce z-20"
        >
          <ChevronDown size={40} strokeWidth={2.5} />
        </a>
      </section>

      {/* Mata Ke Bhete Section */}
      <section id="mata-ki-bheti" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Mata Ke Bhete</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                माता की भेटी से जुड़िए और पाइए आशीर्वाद। यहाँ आप माता रानी के दर्शन कर सकते हैं और अपनी मनोकामनाएं पूर्ण कर सकते हैं।
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal animation="fadeInLeft">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">दर्शन और आराधना</h3>
                  <div className="mb-4">
                    <iframe 
                      width="100%" 
                      height="200" 
                      src="https://www.youtube.com/embed/hjTA0s0GmBg" 
                      title="दर्शन और आराधना"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <a 
                    href="https://www.youtube.com/watch?v=hjTA0s0GmBg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                  >
                    <Play size={16} />
                    Watch Full Video
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeInRight">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Flame className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">आरती और पूजा</h3>
                  <div className="mb-4">
                    <iframe 
                      width="100%" 
                      height="200" 
                      src="https://www.youtube.com/embed/-y839zw7IAM" 
                      title="आरती और पूजा"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <a 
                    href="https://www.youtube.com/watch?v=-y839zw7IAM" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                  >
                    <Play size={16} />
                    Watch Full Video
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bhajan Section */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Bhajan of Baba Jitto Ji & Bua Kodi Ji
                </h3>
                <p className="text-lg text-gray-600">
                  भक्ति भावों से भरे हुए भजन सुनें और आत्मिक शांति पाएं
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bhajanVideos.map((video, index) => (
                  <ScrollReveal key={index} animation="scaleIn" delay={index * 100}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                      <div className="mb-4">
                        <iframe 
                          width="100%" 
                          height="200" 
                          src={`https://www.youtube.com/embed/${video.embedId}`} 
                          title={video.title}
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">{video.title}</h4>
                      <a 
                        href={video.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        <Youtube size={16} />
                        Watch on YouTube
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">History of Baba Jitto Ji & Bua Kodi Ji</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                बाबा जित्तो जी और बुआ कोड़ी जी की पवित्र गाथा
              </p>
            </div>
          </ScrollReveal>
          
          <div className="space-y-12">
            {/* Birth and Early Life */}
            <ScrollReveal animation="fadeInUp">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Birth and Early Life
                </h3>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Baba Jitmal Ji, also known as Baba Jitto, was the son of a Brahmin farmer. His mother's name was Janja, and his father's name was Roop Chand. He was born around 750 to 800 years ago in Agharkot, Reasi.
                    </p>
                    <p>
                      Baba Jitto Ji was known from childhood to be a hardworking and spiritual individual. When his father showed his horoscope to the village priest, the priest said that the child was destined to make a great sacrifice on this earth.
                    </p>
                    <p>
                      According to belief, Baba Jitto Ji was considered an incarnation of Lord Shiva. From a young age, Baba Jitto Ji worshipped Mata Vaishno Devi and his family deity, Raja Mandleek Ji.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-2xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Key Facts</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Born in Agharkot, Reasi</li>
                      <li>• 750-800 years ago</li>
                      <li>• Son of Roop Chand & Janja</li>
                      <li>• Considered incarnation of Lord Shiva</li>
                      <li>• Devotee of Mata Vaishno Devi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Struggles and Divine Blessings */}
            <ScrollReveal animation="fadeInUp" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Struggles and Divine Blessings
                </h3>
                <div className="space-y-6 text-gray-700">
                  <p>
                    As time passed, his parents suddenly passed away. Baba Ji then went to live with his uncle and aunt. His aunt, Jonja, who was also his mother's sister, was very cunning and had learned black magic in Bengal. Jonja had her eyes on Baba Jitto Ji's land, as she had seven sons while Baba Jitto Ji was the only son of his father.
                  </p>
                  <p>
                    During this time, Baba Jitto Ji would go to Trikuta Mountain daily, bathe, and offer prayers to Mata Vaishno Devi. He did this for twelve years. After twelve years, while meditating outside the ancient cave of Vaishno Devi, the goddess appeared and told him that his hard work had paid off and that he could ask for anything he wanted.
                  </p>
                  <p>
                    Baba Jitto Ji said he did not desire power or wealth, only that the sacred water of the Ganges flow in his village for the welfare of the world. The goddess blessed him and told him that he would mark seven spots where first milk would flow for twenty-four hours, followed by water.
                  </p>
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Divine Blessing</h4>
                    <p className="text-gray-700">
                      One day, while bathing in the fifth stream, he placed his turban aside and, after his bath, found a little girl there. He realized that the girl was an incarnation of the goddess, named Gori, later known as Bua Kodi.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Journey to Jhiri and Sacrifice */}
            <ScrollReveal animation="fadeInUp" delay={400}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Journey to Jhiri and the Great Sacrifice
                </h3>
                <div className="space-y-6 text-gray-700">
                  <p>
                    As troubles increased due to Jonja's black magic, Baba Jitto Ji sought guidance from his family deity, Raja Mandleek Ji, who advised him to leave the village. Thus, Baba Jitto Ji left Agharkot Reasi and went to Jhiri Shamachak, Jammu, to a friend who was a blacksmith.
                  </p>
                  <p>
                    His friend took him to the village head, Veer Singh Mehta, to request land for farming. Veer Singh Mehta offered him a barren piece of land. An agreement was made that one-fourth of the crop would go to Veer Singh Mehta and the remaining three-fourths to Baba Jitto Ji.
                  </p>
                  <p>
                    Baba Jitto Ji turned the barren land into fertile soil and grew crops. When it came time to harvest, Baba Jitto Ji's crop yield was the highest in the village. Greed overtook Veer Singh Mehta, who then claimed the entire crop, refusing to give Baba Jitto Ji even a single grain.
                  </p>
                  <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl border-l-4 border-red-500">
                    <h4 className="font-bold text-gray-900 mb-2">The Ultimate Sacrifice</h4>
                    <p className="text-gray-700">
                      In his despair, Baba Jitto Ji took his dagger and stabbed himself in the stomach, cursing Mehta with his dying breath that he would not be able to consume the grain without also consuming Baba Jitto Ji's blood. He further cursed that Mehta's future generations would suffer and never find peace or prosperity.
                    </p>
                  </div>
                  <p>
                    Following the priest's advice, Mehta had his men conceal Baba Jitto Ji inside a tree. Shortly afterward, Bua Kodi Ji arrived and found Baba Jitto Ji inside the tree. Subsequently, Bua Kodi Ji and Baba Jitto Ji committed sati together.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Origin of Temple and Jhiri Mela */}
            <ScrollReveal animation="fadeInUp" delay={600}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Origin of the Temple and Jhiri Mela
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      A few years later, two brothers, Sudh and Budh, were passing by the place where Bua Kodi Ji and Baba Jitto Ji had committed sati. They were quite sad and distressed as their business had almost collapsed.
                    </p>
                    <p>
                      As they sat down to rest at that spot, Baba Jitto Ji and Bua Kodi Ji suddenly appeared before them. They told the brothers that they would grant their wishes, but in return, the brothers would have to build a temple at that place.
                    </p>
                    <p>
                      Sudh and Budh built two temples side by side for Baba Jitto Ji and Bua Kodi Ji. The auspicious day of the temple inauguration was Kartik Purnima.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-2">Healing Powers</h4>
                      <p className="text-gray-700 text-sm">
                        Next to the temple, there is a pond. Anyone suffering from physical ailments, obstacles, or negative influences can find relief by bathing in this pond. The mud from this pond is believed to alleviate all physical ailments.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-2">Annual Mela</h4>
                      <p className="text-gray-700 text-sm">
                        Since then, every year on Kartik Purnima, a grand fair is held at this location, which has become the largest fair in North India. The village Jhiri is located about 20 kms from Jammu, off the Jammu-Akhnoor highway.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced Images & Videos Section */}
      <section id="media" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Images & Videos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                बाबा जित्तो जी और बुआ कोड़ी जी की दिव्य छवियां और झिरी मेला के दर्शन
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-12">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://www.instagram.com/jhiri_mela/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:rotate-1 flex items-center gap-3"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="font-semibold">Instagram पर फॉलो करें</span>
                </a>
                
                <a 
                  href="https://www.youtube.com/@jhiri_mela" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-rotate-1 flex items-center gap-3"
                >
                  <Youtube className="h-6 w-6" />
                  <span className="font-semibold">YouTube चैनल देखें</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <ScrollReveal key={index} animation="scaleIn" delay={index * 100}>
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="text-center">
                    <div 
                      className="w-full h-64 rounded-xl mb-4 overflow-hidden cursor-pointer relative group"
                      onClick={() => openPhotoModal(index)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500 group-hover:brightness-110"
                        style={{ objectPosition: 'center 20%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-3">
                          <span className="text-orange-600 font-bold text-sm">Click to view</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{image.alt}</h3>
                    <p className="text-gray-600 text-sm">🙏 जय बाबा जित्तो जी जय बुआ कोड़ी जी 🙏</p>
                    <button
                      onClick={() => openPhotoModal(index)}
                      className="mt-3 text-orange-600 hover:text-orange-700 font-medium text-sm underline transition-colors duration-300"
                    >
                      Click to view in full size
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="scaleIn">
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">संपर्क विवरण</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900">ईमेल</h4>
                      <p className="text-gray-600">jhirimela9@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900">Instagram</h4>
                      <p className="text-gray-600">DM us on Instagram for quick response</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900">पता</h4>
                      <p className="text-gray-600">Jhiri, Jammu, भारत</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4 text-center">सोशल मीडिया पर फॉलो करें</h4>
                  <div className="flex gap-4 justify-center">
                    <a 
                      href="https://www.instagram.com/jhiri_mela/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
                    >
                      <Instagram className="h-6 w-6 text-white" />
                    </a>
                    <a 
                      href="https://www.youtube.com/@jhiri_mela" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
                    >
                      <Youtube className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">🙏 जय बाबा जित्तो जी जय बुआ कोड़ी जी 🙏</h3>
            <p className="text-orange-100 mb-6">
              बाबा जित्तो जी और बुआ कोड़ी जी की कृपा आप सभी पर बनी रहे
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a 
                href="https://www.instagram.com/jhiri_mela/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-100 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.youtube.com/@jhiri_mela" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-100 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <p className="text-orange-200 text-sm">
              © 2024 Jhiri Mela Devotional Website. सभी अधिकार सुरक्षित।
            </p>
          </div>
        </div>
      </footer>

      {/* Photo Modal */}
      <PhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        images={images}
        initialIndex={selectedPhotoIndex}
      />
    </div>
  );
};

export default Index;
