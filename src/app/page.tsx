import ScrollProgress from '../../components/ScrollProgress';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Identity from '../../components/Identity';
import WhatIBuild from '../../components/WhatIBuild';
import SelectedWork from '../../components/SelectedWork';
import BehindTheBuild from '../../components/BehindTheBuild';
import TechStack from '../../components/TechStack';
import CreativeSection from '../../components/CreativeSection';
import CreatorIdentity from '../../components/CreatorIdentity';
import GitHubSection from '../../components/GitHubSection';
import Timeline from '../../components/Timeline';
import PersonalPhoto from '../../components/PersonalPhoto';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#F4F4F0]">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Identity />
      <WhatIBuild />
      <SelectedWork />
      <BehindTheBuild />
      <TechStack />
      <CreativeSection />
      <CreatorIdentity />
      <GitHubSection />
      <Timeline />
      <PersonalPhoto />
      <Contact />
      <Footer />
    </main>
  );
}
