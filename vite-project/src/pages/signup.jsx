import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/fuelroute.png";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Şifreler eşleşmiyor!");
            return;
        }
        if (!formData.terms) {
            alert("Lütfen kullanım koşullarını kabul edin!");
            return;
        }
        // Handle sign up logic here
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-24">
                <div className="max-w-md mx-auto">
                    {/* Logo ve Başlık */}
                    <div className="text-center mb-8">
                        <img src={logo} alt="FuelRoute Logo" className="h-16 mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-gray-800">Hesap Oluştur</h1>
                        <p className="text-gray-600 mt-2">FuelRoute'a hoş geldiniz</p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Ad Soyad */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Ad Soyad
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Ad Soyad"
                                        required
                                    />
                                </div>
                            </div>

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
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="ornek@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Şifre */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Şifre
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="text-gray-400" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <FaEye className="text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Şifre Tekrar */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Şifre Tekrar
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="text-gray-400" />
                                    </div>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? (
                                            <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <FaEye className="text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Kullanım Koşulları */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                        className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="text-gray-600">
                                        <Link to="/kullanim" className="text-blue-600 hover:text-blue-500">
                                            Kullanım Koşulları
                                        </Link>
                                        'nı kabul ediyorum
                                    </label>
                                </div>
                            </div>

                            {/* Kayıt Ol Butonu */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Kayıt Ol
                            </button>

                            {/* Giriş Yap Linki */}
                            <p className="text-center text-sm text-gray-600">
                                Zaten hesabınız var mı?{" "}
                                <Link to="/signin" className="text-blue-600 hover:text-blue-500 font-medium">
                                    Giriş Yap
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
