import AboutAutokriti from '../components/autokriti/AboutAutokriti';
import History from '../components/autokriti/History';
import AutokritiCard from '../components/autokriti/AutokritiCard';
import TabbedCards from '../components/TabbedCards';
import HeroSection from '../components/autokriti/HeroSection';

export default function AutokritiPage() {
  return (
    <div>
      <HeroSection />
      <AboutAutokriti />
      <History/>
      <TabbedCards />
      <AutokritiCard />
    </div>
  );
} 