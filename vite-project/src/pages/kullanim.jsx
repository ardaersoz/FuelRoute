import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/fuelroute.png";

const KullanimKosullari = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Logo ve Başlık */}
                    <div className="text-center mb-12">
                        <img src={logo} alt="FuelRoute Logo" className="h-16 mx-auto mb-4" />
                        <h1 className="text-4xl font-bold text-gray-800">Kullanım Koşulları ve Gizlilik Politikası</h1>
                        <p className="text-gray-600 mt-2">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                    </div>

                    {/* İçerik */}
                    <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
                        {/* Kullanım Koşulları */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Kullanım Koşulları</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    FuelRoute'u kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Lütfen bu koşulları dikkatlice okuyunuz.
                                </p>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-gray-700">1. Hizmet Kullanımı</h3>
                                    <p>
                                        FuelRoute, yakıt istasyonlarını karşılaştırmanıza ve en uygun fiyatları bulmanıza yardımcı olan bir platformdur. 
                                        Hizmetlerimizi kullanırken tüm yerel, ulusal ve uluslararası yasalara uymayı kabul edersiniz.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-gray-700">2. Hesap Güvenliği</h3>
                                    <p>
                                        Hesabınızın güvenliğinden siz sorumlusunuz. Şifrenizi güvenli tutun ve hesap bilgilerinizi başkalarıyla paylaşmayın.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-gray-700">3. Fikri Mülkiyet</h3>
                                    <p>
                                        FuelRoute'un tüm içeriği, tasarımı ve yazılımı telif hakkı ile korunmaktadır. 
                                        İçeriğimizi izinsiz kullanmak, kopyalamak veya dağıtmak yasaktır.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Gizlilik Politikası */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Gizlilik Politikası</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Gizliliğiniz bizim için önemlidir. Bu politika, kişisel verilerinizin nasıl toplandığını, 
                                    kullanıldığını ve korunduğunu açıklar.
                                </p>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-gray-700">1. Toplanan Bilgiler</h3>
                                    <p>
                                        Kullanıcı deneyimini iyileştirmek için şu bilgileri topluyoruz:
                                    </p>
                                    <ul className="list-disc list-inside ml-4">
                                        <li>Ad ve soyad</li>
                                        <li>E-posta adresi</li>
                                        <li>Konum bilgisi</li>
                                        <li>Kullanım istatistikleri</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-gray-700">2. Bilgilerin Kullanımı</h3>
                                    <p>
                                        Topladığımız bilgileri şu amaçlarla kullanıyoruz:
                                    </p>
                                    <ul className="list-disc list-inside ml-4">
                                        <li>Hizmetlerimizi iyileştirmek</li>
                                        <li>Kişiselleştirilmiş deneyim sunmak</li>
                                        <li>Güvenliği sağlamak</li>
                                        <li>Yasal yükümlülükleri yerine getirmek</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-gray-700">3. Veri Güvenliği</h3>
                                    <p>
                                        Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz. 
                                        Ancak internet üzerinden hiçbir veri iletiminin %100 güvenli olmadığını unutmayın.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* İletişim */}
                        <section className="pt-4 border-t">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">İletişim</h2>
                            <p className="text-gray-600">
                                Kullanım koşulları veya gizlilik politikası hakkında sorularınız için{" "}
                                <a href="mailto:info@fuelroute.com" className="text-blue-600 hover:text-blue-500">
                                    info@fuelroute.com
                                </a>{" "}
                                adresine e-posta gönderebilirsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KullanimKosullari;
