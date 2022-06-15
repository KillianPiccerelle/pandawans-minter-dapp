import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { Hero } from '../components/Hero';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-screen">
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth', 'mint', 'about']} />
        </HeaderMenu>
        <div className="flex justifyContent-space-between mt-8 xl:mt-12 2xl:mt-24">
          <Hero />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

<style>height {}</style>;
