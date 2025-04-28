import React from "react";
import hero from "../assets/hero2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gray-150 min-h-screen w-full flex flex-col items-center justify-center">
      <div className="container mx-auto flex flex-1 flex-col-reverse md:flex-row items-center justify-center py-16">
        {/* Sol: Metin */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            En Ekonomik Rotayı <span className="text-blue-600">FuelRoute</span> ile Bul!
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Yakıt fiyatlarını ve güzergah seçeneklerini karşılaştır, yolculuğunu en uygun maliyetle planla. FuelRoute, bir noktadan diğerine en ekonomik şekilde ulaşman için sana rehberlik eder.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition mx-auto"
          >
            Hemen Başla
          </Link>
        </div>
        {/* Sağ: Görsel */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 mb-10 md:mb-0">
          <img
            src={hero}
            alt="FuelRoute Hero"
            className="rounded-xl shadow-lg max-h-[55vh] w-full object-cover"
          />
        </div>
      </div>
      {/* Arka plan dekorasyonu */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full opacity-80 -z-10 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-300 rounded-full opacity-50 -z-10 blur-2xl"></div>
    </section>
  );
};

export default Hero;