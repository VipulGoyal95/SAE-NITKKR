import AboutAutokriti from '../components/autokriti/AboutAutokriti';
import History from '../components/autokriti/History';
import AutokritiCard from '../components/autokriti/AutokritiCard';
// import TabbedCards from '../components/TabbedCards';
import HeroSection from '../components/autokriti/HeroSection';
import AutokritiDespscription from '../components/autokriti/AutokritiDespscription';


export const metadata = {
  title: "Autokriti"
}

export default function AutokritiPage() {
  return (
    <div className='bg-black'>
      <HeroSection />
      <AboutAutokriti />
      <History/>
      <AutokritiDespscription />
      <AutokritiCard />
    </div>
  );
} 