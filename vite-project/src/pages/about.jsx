import React from "react";
import Navbar from "../components/Navbar"; // Navbar yolunu kendi projenize göre ayarlayın
import { FaMapMarkedAlt, FaMoneyBillWave, FaSmile, FaShieldAlt, FaRocket, FaHandsHelping } from "react-icons/fa";

const aboutFeatures = [
  {
    icon: <FaMapMarkedAlt className="text-blue-600 text-3xl mb-2" />,
    title: "Akıllı Rota Planlama",
    desc: "Yolculuklarınızı en kısa ve en ekonomik şekilde planlamanızı sağlayan gelişmiş algoritmalar kullanıyoruz.",
  },
  {
    icon: <FaMoneyBillWave className="text-blue-600 text-3xl mb-2" />,
    title: "Ekonomik Yakıt Karşılaştırması",
    desc: "Güncel yakıt fiyatlarını analiz ederek size en uygun güzergahı ve yakıtı öneriyoruz.",
  },
  {
    icon: <FaSmile className="text-blue-600 text-3xl mb-2" />,
    title: "Kullanıcı Odaklı Tasarım",
    desc: "Sade, modern ve kolay kullanılabilir arayüzümüzle herkes için erişilebilir bir deneyim sunuyoruz.",
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl mb-2" />,
    title: "Güvenli ve Şeffaf",
    desc: "Verilerinizin gizliliğine önem veriyor, şeffaf ve güvenilir bir hizmet sunuyoruz.",
  },
  {
    icon: <FaRocket className="text-blue-600 text-3xl mb-2" />,
    title: "Sürekli Gelişim",
    desc: "Teknolojimizi ve hizmetlerimizi sürekli geliştirerek size en iyi deneyimi sunmayı hedefliyoruz.",
  },
  {
    icon: <FaHandsHelping className="text-blue-600 text-3xl mb-2" />,
    title: "7/24 Destek",
    desc: "Her zaman yanınızdayız! Sorularınız ve ihtiyaçlarınız için 7/24 destek ekibimizle iletişime geçebilirsiniz.",
  },
];

const AboutPage = () => (
  <div className="min-h-screen bg-gray-150 flex flex-col w-full">
    <Navbar />
    <main className="flex-1 flex flex-col items-center justify-center py-12 px-0 w-full">
      <section className="w-full bg-white rounded-none shadow-xl p-0 sm:p-6 md:p-10 flex flex-col md:flex-row gap-10 items-stretch">
        {/* Sol: Hakkımızda metni */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Hakkımızda
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            <span className="font-bold text-blue-600">FuelRoute</span> olarak, yolculuklarınızı daha ekonomik, daha kolay ve daha keyifli hale getirmek için buradayız. Akıllı rota planlama ve yakıt fiyatı karşılaştırma teknolojimizle, bir noktadan diğerine en uygun maliyetle ulaşmanızı sağlıyoruz.
          </p>
          <p className="text-gray-600 text-base mb-4">
            Misyonumuz, kullanıcılarımıza sadece bir rota değil, aynı zamanda tasarruf ve güvenlik sunmak. Gelişmiş algoritmalarımız sayesinde, yakıt fiyatlarını ve güzergahları analiz ederek en ekonomik seçenekleri anında sunuyoruz.
          </p>
          <p className="text-gray-600 text-base mb-4">
            Vizyonumuz, Türkiye'nin ve dünyanın dört bir yanında yolculuk yapan herkesin ilk tercihi olmak. Kullanıcı dostu arayüzümüz, şeffaf fiyat politikamız ve sürekli gelişen teknolojimizle, yolculuklarınızı daha verimli ve stressiz hale getirmek için çalışıyoruz.
          </p>
          <div className="bg-blue-100 rounded-xl p-4 mt-2 shadow flex flex-col items-start">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Neden FuelRoute?</h2>
            <ul className="text-gray-700 text-left space-y-2 max-w-md text-sm">
              <li>
                <span className="font-semibold text-blue-600">• Şeffaflık:</span> Tüm fiyatlar ve rotalar güncel ve açık şekilde sunulur.
              </li>
              <li>
                <span className="font-semibold text-blue-600">• Destek:</span> 7/24 müşteri desteği ile her zaman yanınızdayız.
              </li>
              <li>
                <span className="font-semibold text-blue-600">• Güvenlik:</span> Kişisel verileriniz koruma altındadır.
              </li>
              <li>
                <span className="font-semibold text-blue-600">• Yenilik:</span> Sürekli güncellenen ve gelişen bir platform.
              </li>
              <li>
                <span className="font-semibold text-blue-600">• Kolaylık:</span> Sadece birkaç tıkla en ekonomik rotayı bulabilirsiniz.
              </li>
            </ul>
          </div>
          <div className="mt-6 text-gray-500 text-sm">
            Sorularınız mı var? <span className="text-blue-600 font-semibold">info@fuelroute.com</span> adresinden bize ulaşabilirsiniz.
          </div>
        </div>
        {/* Sağ: Özellikler */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-blue-50 rounded-xl p-5 shadow hover:scale-105 transition-transform"
              >
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default AboutPage;
