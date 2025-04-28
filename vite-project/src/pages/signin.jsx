import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/fuelroute.png";

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign in logic here
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
                        <h1 className="text-3xl font-bold text-gray-800">Giriş Yap</h1>
                        <p className="text-gray-600 mt-2">FuelRoute'a hoş geldiniz</p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* E-posta */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    E-posta
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="text-gray-400" />
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

                            {/* Şifremi Unuttum */}
                            <div className="flex items-center justify-end">
                                <Link to="/sifreunuttum" className="text-sm text-blue-600 hover:text-blue-500">
                                    Şifremi Unuttum
                                </Link>
                            </div>

                            {/* Giriş Yap Butonu */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Giriş Yap
                            </button>

                            {/* Kayıt Ol Linki */}
                            <p className="text-center text-sm text-gray-600">
                                Hesabınız yok mu?{" "}
                                <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                                    Kayıt Ol
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
