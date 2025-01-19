import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HappyClients from "./components/HappyClients";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import LogoSlider from "./components/LogoSlider";
import MobileAppSection from "./components/MobileAppSection";
import MainNavbar from "./components/navbar/Main";
import TopNavbar from "./components/navbar/Top";
import ProcessSteps from "./components/ProcessSection";
import ReviewSection from "./components/ReviewSection";
import ServicesSection from "./components/ServicesSection";
import StatisticsSection from "./components/StatisticsSection";
import SubscriptionSection from "./components/SubscriptionSection";
import TrustedSection from "./components/TrustedSection";
import WhyChooseSection from "./components/WhySection";

function App() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <HeroSection />
      <TrustedSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <IntroSection />
      <HappyClients />
      <ProcessSteps />
      <BlogSection />
      <ReviewSection />
      <FAQSection />
      <MobileAppSection />
      <StatisticsSection />
      <SubscriptionSection />
      <LogoSlider />
      <Footer />
    </>
  );
}

export default App;
