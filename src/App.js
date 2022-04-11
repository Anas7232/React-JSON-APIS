import './App.css';
import BannerSection from './components/BannerSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
     <Header />
     <HeroSection />
     <BannerSection />
    </div>
  );
}

export default App;
