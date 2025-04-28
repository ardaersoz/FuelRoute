import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Spec from './components/Spec'
import Tutorial1 from './components/Tutorial1'
import Tutorial2 from './components/Tutorial2'
import Tutorial3 from './components/Tutorial3'
import Customer from './components/customer'
import Footer from './components/footer'
import { Routes, Route } from "react-router-dom";
import PaymentPage from "./pages/payment";
import AboutPage from "./pages/about";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ContactPage from "./pages/iletisim";
import KullanimPage from "./pages/kullanim";
import SifreUnuttumPage from "./pages/sifreunuttum";

function App() {
  return (
    <Routes>
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/iletisim" element={<ContactPage />} />
      <Route path="/kullanim" element={<KullanimPage />} />
      <Route path="/sifreunuttum" element={<SifreUnuttumPage />} />
      <Route path="/" element={
        <div>
          <Navbar />
          <Hero />
          <Spec />
          <Tutorial1 />
          <Tutorial2 />
          <Tutorial3 />
          <Customer />
          <Footer />
        </div>
      } />
    </Routes>
  )
}

export default App
