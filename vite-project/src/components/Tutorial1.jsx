import React from "react";
import tutorial1 from "../assets/tutorial1.png";
import { FaMapMarkerAlt } from "react-icons/fa";

const Tutorial1 = () => (
  <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-gray-150 overflow-hidden py-8 sm:py-12 md:py-14">
    {/* Dekoratif arka plan */}
    <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-blue-200 rounded-full opacity-30 -z-10 blur-2xl"></div>
    <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-44 sm:h-44 bg-blue-300 rounded-full opacity-20 -z-10 blur-2xl"></div>
    <section className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 min-h-[40vh] max-w-6xl mx-auto w-full rounded-3xl shadow-lg px-2 sm:px-4">
      {/* Görsel */}
      <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
        <img
          src={tutorial1}
          alt="Adım 1: Başlangıç ve varış noktası seçimi"
          className="rounded-xl object-contain mb-2 sm:mb-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
        />
        <FaMapMarkerAlt className="text-blue-500 text-2xl sm:text-3xl ml-2 self-center" />
      </div>
      {/* Açıklama */}
      <div className="w-full md:w-1/2 px-1 sm:px-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2 sm:mb-4 leading-tight">
          <span className="text-blue-600">1. Adım:</span> Başlangıç ve Varış Noktanı Seç
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Uygulamanın ana ekranında, gitmek istediğin <span className="font-semibold text-blue-600">başlangıç</span> ve <span className="font-semibold text-blue-600">varış noktalarını</span> harita üzerinden seç veya adres olarak gir. Böylece yolculuğun için ilk adımı atmış olursun.
        </p>
      </div>
    </section>
  </div>
);

export default Tutorial1;
