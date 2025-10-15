import "./App.css";
import AdditionalNews from "./components/AdditionalNews/AdditionalNews";
import Banner from "./components/Banner/Banner";
import CoachesSection from "./components/CoachesSection/CoachesSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import NewsGrid from "./components/NewsGrid/NewsGrid";
import SubscriptionSection from "./components/SubscriptionSection/SubscriptionSection";
import "./styles/globals.scss";
import firstBanner from "./assets/images/banners/banner-1.webp";
import secondBanner from "./assets/images/banners/banner-2.webp";

function App() {
  return (
    <div className="app">
      <HeroSection />
      <NewsGrid />
      <CoachesSection />
      <AdditionalNews />
      <Banner
        backgroundUrl={firstBanner}
        title="Юрий Поклад: «Динамо» как бы начинает работать заново"
        tag="болельщикам"
      />

      <SubscriptionSection />
      <Banner
        backgroundUrl={secondBanner}
        title="Экстрим"
        subtitle="Интервью с Юрием Покладом.
Полный список всех медалей Беларуси на Европейских играх."
      />
      <Footer />
    </div>
  );
}

export default App;
