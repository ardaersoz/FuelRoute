import React from "react";

const features = [
  {
    title: "En Ekonomik Rota",
    desc: "Yakıt fiyatlarını ve güzergahları analiz ederek sana en uygun maliyetli rotayı sunar.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 19l7-7-7-7" />
      </svg>
    ),
  },
  {
    title: "Canlı Yakıt Fiyatları",
    desc: "Güncel yakıt fiyatlarını anlık olarak takip edebilir, rotanı buna göre optimize edebilirsin.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Kullanıcı Dostu Arayüz",
    desc: "Modern ve sade tasarımı ile yolculuğunu planlamak çok kolay.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    title: "Hızlı ve Güvenilir",
    desc: "Gelişmiş algoritmalar sayesinde sonuçlara saniyeler içinde ulaşabilirsin.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 16h-1v-4h-1m4 0h-1v-4h-1" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

const Spec = () => {
  return (
    <section className="relative py-20 bg-gray-150 overflow-hidden min-h-[80vh] w-full">
      {/* Arka plan aksesuarları */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
          FuelRoute Özellikleri
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spec;
