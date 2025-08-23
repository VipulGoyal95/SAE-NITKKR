import AboutAutokriti from '../components/autokriti/AboutAutokriti';
import History from '../components/autokriti/History';
import AutokritiCard from '../components/autokriti/AutokritiCard';
// import TabbedCards from '../components/TabbedCards';
import HeroSection from '../components/autokriti/HeroSection';
import AutokritiDespscription from '../components/autokriti/AutokritiDespscription';
import WorkshopDomain from '../components/autokriti/WorkshopDomain';
import ShowcaseVideo from '../components/autokriti/ShowcaseVideo';
import ScrollingGallery from '../components/ScrollingGallery';


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
      <WorkshopDomain />
      <ShowcaseVideo/>
      {/* <AutokritiCard /> */}
      <ScrollingGallery />
    </div>
  );
} 