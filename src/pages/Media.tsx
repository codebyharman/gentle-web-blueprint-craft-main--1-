import { useState } from "react";
import Navbar from "@/components/Navbar";
import PhotoModal from "@/components/PhotoModal";
import ScrollReveal from "@/components/ScrollReveal";
import { Instagram, Youtube } from "lucide-react";

const images = [
  {
    src: "/lovable-uploads/3b3ce746-7937-4a01-a4ff-8bafba36c639.png",
    alt: "Baba Jitto Ji & Bua Kodi Ji Temple Decorations",
  },
  {
    src: "/lovable-uploads/maa_durga_image1.png",
    alt: "Maa Durga Divine Image",
  },
  {
    src: "/lovable-uploads/7e26fcf1-fc08-4793-8c01-ccba9cb6afbf.png",
    alt: "Temple Offerings and Decorations",
  },
  {
    src: "/lovable-uploads/9fb7bb00-fd9c-4ed8-999f-b7354a876dc4.png",
    alt: "Jhiri Mela Celebration",
  },
  {
    src: "/lovable-uploads/817e7259-da59-47eb-95cc-d8bb0d15452b.png",
    alt: "Baba Jitto Ji & Bua Kodi Ji Divine Idols",
  },
  {
    src: "/lovable-uploads/ec67e721-06cc-44f3-8d57-9c208658f13f.png",
    alt: "Baba Jitto Ji & Bua Kodi Ji in Divine Attire",
  },
  {
    src: "/lovable-uploads/d39547d9-a45c-4c8f-8f93-c721a0554271.png",
    alt: "Sacred Pond at Jhiri",
  },
  {
    src: "/lovable-uploads/2ae0bdee-8aeb-4625-9fea-5442bae2ee85.png",
    alt: "Divine Portrait of Baba Jitto Ji & Bua Kodi Ji",
  },
  {
    src: "/lovable-uploads/6373a87d-6f4f-4e03-a2b3-d5abd08fd269.png",
    alt: "Devotees at Jhiri Temple",
  },
  {
    src: "/lovable-uploads/affc3342-75db-448b-85a6-a8e59746e543.png",
    alt: "Baba Jitto Ji & Bua Kodi Ji with Mata Durga",
  },
];

const Media = () => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const openPhotoModal = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsPhotoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 py-20 bg-white" id="media">
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
                        style={{ objectPosition: "center 20%" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

export default Media; 