import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { Hero } from '../components/Hero';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HeroImage } from '../components/HeroImage';
import { Faq } from '../components/Faq';
import { Roadmap } from '../components/Roadmap';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-screen">
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth', 'mint', 'about']} />
        </HeaderMenu>
        <div className="flex justifyContent-space-between mt-8 xl:mt-12 2xl:mt-8">
          <Hero />
          <HeroImage />
        </div>
      </div>

      <Faq />
      <Roadmap />
    </MainLayout>
  );
};

export default Home;
