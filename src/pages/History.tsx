import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar />

      {/* History Section */}
      <section className="pt-24 py-20 bg-gradient-to-br from-orange-50 to-red-50">
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
    </div>
  );
};

export default History; 