import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { Hero } from '../components/Hero';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HeroImage } from '../components/HeroImage';
import { Faq } from '../components/Faq';
import { Roadmap } from '../components/Roadmap';
import { Team } from '../components/Team';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-screen">
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth', 'mint', 'about']} />
        </HeaderMenu>
        <div className="flex justifyContent-space-between mt-24">
          <Hero />
          <HeroImage />
        </div>
      </div>

      <Faq />
      <Roadmap />
      <Team />
    </MainLayout>
  );
};

export default Home;
