import Navbar from "@/components/Navbar";

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
    <Navbar />
    <div className="pt-24 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <ul className="space-y-6 text-lg text-gray-700">
        <li>
          <strong>Email:</strong> jhirimela9@gmail.com
        </li>
        <li>
          <strong>Instagram:</strong> <a href="https://www.instagram.com/jhiri_mela/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">@jhiri_mela</a>
        </li>
        <li>
          <strong>Address:</strong> Jhiri, Jammu, India
        </li>
      </ul>
    </div>
  </div>
);

export default Contact; 