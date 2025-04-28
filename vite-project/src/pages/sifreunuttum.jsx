import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/fuelroute.png";

const SifreUnuttum = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Şifre sıfırlama e-postası gönderme işlemi burada yapılacak
        console.log("Şifre sıfırlama e-postası gönderildi:", email);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-24">
                <div className="max-w-md mx-auto">
                    {/* Logo ve Başlık */}
                    <div className="text-center mb-8">
                        <img src={logo} alt="FuelRoute Logo" className="h-16 mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-gray-800">Şifremi Unuttum</h1>
                        <p className="text-gray-600 mt-2">
                            {isSubmitted 
                                ? "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi."
                                : "Şifrenizi sıfırlamak için e-posta adresinizi girin."}
                        </p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* E-posta */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        E-posta
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope className="text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="ornek@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Gönder Butonu */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Şifre Sıfırlama Bağlantısı Gönder
                                </button>

                                {/* Giriş Yap Linki */}
                                <p className="text-center text-sm text-gray-600">
                                    <Link to="/signin" className="text-blue-600 hover:text-blue-500 font-medium">
                                        Giriş sayfasına dön
                                    </Link>
                                </p>
                            </form>
                        ) : (
                            <div className="text-center space-y-4">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <p className="text-blue-700">
                                        Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. 
                                        Lütfen gelen kutunuzu kontrol edin.
                                    </p>
                                </div>
                                <Link
                                    to="/signin"
                                    className="inline-block text-blue-600 hover:text-blue-500 font-medium"
                                >
                                    Giriş sayfasına dön
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SifreUnuttum;
