import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart, Flame, Play, Youtube } from "lucide-react";

const MataKeBhete = () => {
  const bhajanVideos = [
    {
      title: "Full Bhajan Maa Sherawali Kanya Da Roop",
      url: "https://www.youtube.com/watch?v=RrmeYNoNAjY",
      embedId: "RrmeYNoNAjY",
    },
    {
      title: "Amar Katha Baba Jitto Ji & Bua Kodi Ji By Des Raj Bhagat (Bajalta)",
      url: "https://www.youtube.com/watch?v=U-mqrazQbEc",
      embedId: "U-mqrazQbEc",
    },
    {
      title: "AARTI BUA DATI JI & BABA JITTO JI",
      url: "https://www.youtube.com/watch?v=xJLFmmr-aRc",
      embedId: "xJLFmmr-aRc",
    },
    {
      title: "BUA DATI PHULLA WARGI",
      url: "https://youtu.be/HgSHmd-e3n4",
      embedId: "HgSHmd-e3n4",
    },
    {
      title: "KARAK BABA JITTO JI BUA KODI BY GHULAM MOHAMMAD",
      url: "https://www.youtube.com/watch?v=uNIAf7tiBJc",
      embedId: "uNIAf7tiBJc",
    },
    {
      title: "KARAK BABA JITTO JI BY RAM KUMAR JOGI JI",
      url: "https://www.youtube.com/watch?v=BkTMN-QXdRA",
      embedId: "BkTMN-QXdRA",
    },
    {
      title: "KARAK BABA JITTO JI",
      url: "https://www.youtube.com/watch?v=ueSlwgrkozo",
      embedId: "ueSlwgrkozo",
    },
    {
      title: "WANGA CHADA LO KUDIO BUA DATI DE DARBAR DIYA",
      url: "https://www.youtube.com/watch?v=eqovhpdecSk",
      embedId: "eqovhpdecSk",
    },
    {
      title: "Bua Rani Begayi aasan laake",
      url: "https://www.youtube.com/watch?v=_uZO_6zC1ZI",
      embedId: "_uZO_6zC1ZI",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-24 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Mata Ke Bhete
              </h2>
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
                    />
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
                    />
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
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                        {video.title}
                      </h4>
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
    </div>
  );
};

export default MataKeBhete; 