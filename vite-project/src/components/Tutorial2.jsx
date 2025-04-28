import React from "react";
import tutorial2 from "../assets/tutorial1.png";
import { FaGasPump } from "react-icons/fa";

const Tutorial2 = () => (
  <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-gray-150 overflow-hidden py-8 sm:py-12 md:py-14">
    {/* Dekoratif arka plan */}
    <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-blue-200 rounded-full opacity-30 -z-10 blur-2xl"></div>
    <div className="absolute bottom-0 left-0 w-28 h-28 sm:w-44 sm:h-44 bg-blue-300 rounded-full opacity-20 -z-10 blur-2xl"></div>
    {/* Görsel */}
    <section className="relative flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 min-h-[40vh] max-w-6xl mx-auto w-full rounded-3xl shadow-lg px-2 sm:px-4">
      <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
        <img
          src={tutorial2}
          alt="Adım 2: Yakıt tipi ve fiyat karşılaştırması"
          className="rounded-xl object-contain mb-2 sm:mb-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
        />
        <FaGasPump className="text-blue-500 text-2xl sm:text-3xl ml-2 self-center" />
      </div>
      {/* Açıklama */}
      <div className="w-full md:w-1/2 px-1 sm:px-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2 sm:mb-4 leading-tight">
          <span className="text-blue-600">2. Adım:</span> Yakıt Tipini ve Fiyatları Karşılaştır
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Kullanmak istediğin <span className="font-semibold text-blue-600">yakıt</span> ve <span className="font-semibold text-blue-600">araç tipini</span> seç, güncel fiyatları incele. FuelRoute, sana en ekonomik seçenekleri sunmak için fiyatları otomatik olarak karşılaştırır.
        </p>
      </div>
    </section>
  </div>
);

export default Tutorial2;
