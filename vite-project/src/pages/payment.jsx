import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";

const plans = [
  {
    name: "Aylık Plan",
    price: 150,
    period: "ay",
    features: [
      "Tüm rota ve yakıt özellikleri",
      "Sınırsız kullanım",
      "7/24 destek",
      "İstediğin zaman iptal et"
    ],
    highlight: false,
  },
  {
    name: "Yıllık Plan",
    price: 120 * 12, // 120 TL/ay x 12 ay = 1440 TL (indirimli)
    period: "yıl",
    features: [
      "Tüm rota ve yakıt özellikleri",
      "Sınırsız kullanım",
      "7/24 destek",
      "Ekstra %20 indirim",
      "Öncelikli müşteri desteği"
    ],
    highlight: true,
    oldPrice: 1800, // 150x12
    badge: "En Çok Tercih Edilen"
  },
];

const PaymentPage = () => {
  const [selected, setSelected] = useState(plans[1].name);

  const handleBuy = () => {
    alert(`"${selected}" için satın alma işlemi başlatıldı!`);
  };

  return (
    <div className="min-h-screen bg-gray-150 flex flex-col items-center py-14 px-2">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 mt-12 text-center">
          FuelRoute Premium Planlar
        </h1>
        <p className="text-gray-600 mb-10 text-center max-w-xl">
          Daha ekonomik yolculuklar için FuelRoute Premium'a geç! Aşağıdan sana uygun planı seçerek hemen avantajlardan yararlanmaya başla.
        </p>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 transition-all duration-300
                ${plan.highlight ? "border-blue-600 scale-105 z-10" : "border-transparent"}
                ${selected === plan.name ? "ring-2 ring-blue-400" : ""}
              `}
              onClick={() => setSelected(plan.name)}
              style={{ cursor: "pointer" }}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                  {plan.badge}
                </span>
              )}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>
              {plan.oldPrice && (
                <div className="text-gray-400 text-sm line-through mb-1">
                  {plan.oldPrice} TL/yıl
                </div>
              )}
              <div className="flex items-end mb-4">
                <span className="text-4xl font-extrabold text-blue-600">{plan.price}</span>
                <span className="text-lg text-gray-600 font-medium ml-1">TL / {plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition
                  ${plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"}
                `}
              >
                {selected === plan.name ? "Seçildi" : "Bu Planı Seç"}
              </button>
            </div>
          ))}
        </div>
        <button
          className="mt-8 w-full max-w-xs py-3 rounded-lg bg-blue-600 text-white font-bold text-lg shadow hover:bg-blue-700 transition"
          onClick={handleBuy}
        >
          Satın Al
        </button>
        <div className="mt-10 text-gray-400 text-xs text-center max-w-lg">
          Satın alma işlemi için planı seçtikten sonra ödeme adımına yönlendirileceksiniz. Tüm ödemeler güvenli altyapı ile alınır.
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
