import React from "react";
import { FaGithub, FaDiscord, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from "../components/Navbar";

const ContactPage = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: <FaGithub className="text-2xl" />,
            url: "https://github.com/ardaersoz",
            color: "hover:text-gray-800"
        },
        {
            name: "Discord",
            icon: <FaDiscord className="text-2xl" />,
            url: "https://discord.gg/VZR2MSsf",
            color: "hover:text-[#5865F2]"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="text-2xl" />,
            url: "https://www.linkedin.com/in/arda-ersoz-436755235/",
            color: "hover:text-[#0077B5]"
        },
        {
            name: "Twitter",
            icon: <FaTwitter className="text-2xl" />,
            url: "https://twitter.com/yourusername",
            color: "hover:text-[#1DA1F2]"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">İletişim</h1>
                    <p className="text-gray-600 text-center mb-12">
                        Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
                    </p>

                    {/* Sosyal Medya Bağlantıları */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex flex-col items-center p-6 bg-gray-50 rounded-lg transition-all duration-300 ${link.color}`}
                            >
                                {link.icon}
                                <span className="mt-2 text-gray-700">{link.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* E-posta Formu */}
                    <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">E-posta ile İletişim</h2>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-2xl text-gray-600" />
                            <a
                                href="mailto:your.email@example.com"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                info@fuelroute.com
                            </a>
                        </div>
                    </div>

                    {/* İletişim Bilgileri */}
                    <div className="mt-12 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">İletişim Bilgileri</h2>
                        <p className="text-gray-600">
                            Adres: Çorum, Türkiye<br />
                            Çalışma Saatleri: Pazartesi - Cuma, 09:00 - 18:00
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
