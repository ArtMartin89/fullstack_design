import HeroCarousel from './components/HeroCarousel';
import FeaturesSection from './components/FeaturesSection';
import TimelineSection from './components/TimelineSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <FeaturesSection />
      <TimelineSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
