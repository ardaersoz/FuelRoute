import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    comment: "FuelRoute sayesinde yolculuklarımda ciddi tasarruf sağladım. Kullanımı çok kolay!",
    rating: 5,
  },
  {
    name: "Elif Demir",
    comment: "Yakıt fiyatlarını karşılaştırmak hiç bu kadar pratik olmamıştı. Harika bir uygulama!",
    rating: 5,
  },
  {
    name: "Mehmet Kaya",
    comment: "Rota önerileri gerçekten ekonomik ve hızlı. Tavsiye ederim.",
    rating: 4,
  },
  {
    name: "Zeynep Aksoy",
    comment: "Arayüzü çok modern ve anlaşılır. Herkese öneriyorum.",
    rating: 5,
  },
  {
    name: "Burak Şahin",
    comment: "Yolculuk öncesi plan yapmak artık çok kolay. Teşekkürler FuelRoute!",
    rating: 5,
  },
  {
    name: "Ayşe Kılıç",
    comment: "Farklı yakıt tipleri için fiyatları anında görebiliyorum. Çok işime yaradı.",
    rating: 4,
  },
  {
    name: "Emre Öz",
    comment: "Güvenilir ve hızlı sonuçlar veriyor. Sık sık kullanıyorum.",
    rating: 5,
  },
  {
    name: "Derya Uçar",
    comment: "Ekonomik rota bulmak için birebir. Herkese tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Canan Polat",
    comment: "Yolculuklarımda artık daha az yakıt harcıyorum. Süper bir uygulama!",
    rating: 5,
  },
  {
    name: "Mert Güneş",
    comment: "Kullanıcı dostu arayüzüyle çok pratik.",
    rating: 4,
  },
  {
    name: "Selin Yıldız",
    comment: "Yolculuklarımda artık daha az yakıt harcıyorum. Süper bir uygulama!",
    rating: 5,
  },
  {
    name: "Onur Aydın",
    comment: "Rota hesaplaması çok hızlı ve doğru.",
    rating: 5,
  },
  {
    name: "Gizem Koç",
    comment: "Ekonomik rota bulmak için birebir. Herkese tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Barış Demir",
    comment: "Yakıt fiyatlarını anlık görebilmek harika.",
    rating: 4,
  },
  {
    name: "Melis Akın",
    comment: "Yolculuk öncesi plan yapmak artık çok kolay. Teşekkürler FuelRoute!",
    rating: 5,
  },
  {
    name: "Kerem Uslu",
    comment: "Fiyat karşılaştırması çok işime yaradı.",
    rating: 5,
  },
];

const VISIBLE_COUNT = 3;
const SLIDE_INTERVAL = 3000; // ms
const CARD_WIDTH = 350; // px
const CARD_MARGIN = 32; // px (mx-4 = 1rem = 16px sağ + 16px sol = 32px toplam)
const CONTAINER_WIDTH = VISIBLE_COUNT * CARD_WIDTH + (VISIBLE_COUNT - 1) * CARD_MARGIN; // 3*350 + 2*32 = 1114px

const CustomerTestimonials = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  // Sonsuz döngü için: başa ve sona kopya ekle
  const extendedTestimonials = [
    ...testimonials.slice(-VISIBLE_COUNT),
    ...testimonials,
    ...testimonials.slice(0, VISIBLE_COUNT),
  ];
  const totalSlides = testimonials.length;
  const offset = index + VISIBLE_COUNT;

  // Otomatik kaydırma
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, SLIDE_INTERVAL);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // Sonsuz döngü efekti: animasyon bitince anında başa sar
  useEffect(() => {
    if (index > totalSlides) {
      // animasyon bittiğinde transition olmadan başa sar
      setTimeout(() => {
        setIndex(1);
      }, 700); // animasyon süresiyle aynı olmalı
    }
    if (index < 0) {
      setIndex(totalSlides);
    }
  }, [index, totalSlides]);

  // Transition'ı kontrol etmek için
  const isTransitioning = index !== 0 && index !== totalSlides + 1;

  return (
    <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-blue-600 overflow-hidden py-14 mb-24">
      {/* Dekoratif arka plan */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 -z-10 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-44 h-44 bg-gray-800 rounded-full opacity-20 -z-10 blur-2xl"></div>
      <section className="relative flex flex-col items-center gap-8 min-h-[40vh] max-w-6xl mx-auto w-full rounded-3xl shadow-lg px-4 py-8 bg-white">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          <span className="text-blue-600">Müşteri Yorumları</span>
        </h2>
        <div className="w-full flex justify-center items-center overflow-hidden">
          <div
            className="overflow-hidden"
            style={{
              width: `${CONTAINER_WIDTH}px`,
              maxWidth: "100%",
            }}
          >
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{
                width: `${(CARD_WIDTH + CARD_MARGIN) * extendedTestimonials.length - CARD_MARGIN}px`,
                transform: `translateX(-${offset * (CARD_WIDTH + CARD_MARGIN)}px)`,
              }}
              onTransitionEnd={() => {
                // Başa sarma işlemi için
                if (index === totalSlides) {
                  setIndex(0);
                }
              }}
            >
              {extendedTestimonials.map((t, idx) => (
                <div
                  key={idx + t.name}
                  className="flex-shrink-0 bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col items-center"
                  style={{
                    minHeight: "240px",
                    maxWidth: `${CARD_WIDTH}px`,
                    width: `${CARD_WIDTH}px`,
                    marginRight: idx === extendedTestimonials.length - 1 ? 0 : `${CARD_MARGIN}px`,
                  }}
                >
                  <FaUserCircle className="text-blue-400 text-5xl mb-2" />
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          "text-yellow-400 " + (i < t.rating ? "" : "opacity-30")
                        }
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg text-center mb-4 min-h-[60px]">"{t.comment}"</p>
                  <span className="font-bold text-blue-700">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 text-gray-400 text-sm text-center">
          Yorumlar otomatik olarak kayar ve tüm müşterilerimizi görebilirsiniz.
        </div>
      </section>
    </div>
  );
};

export default CustomerTestimonials;