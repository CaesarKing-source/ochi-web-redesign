import Preloader from './components/Preloader';
import { Navbar, LandingPage, Marquee, About, Eyes, Featured, Cards, Footer } from './components/index'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-full bg-zinc-900 text-white">
      <Preloader />
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
