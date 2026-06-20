import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ReportSection from './components/ReportSection';
import Download from './components/Download';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ReportSection />
        <Download />
      </main>
      <Footer />
    </>
  );
}
