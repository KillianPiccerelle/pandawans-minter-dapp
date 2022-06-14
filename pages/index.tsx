import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';

import { HeaderMenuButtons } from '../components/HeaderMenuButtons';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-screen">
        <HeaderMenu></HeaderMenu>
      </div>
    </MainLayout>
  );
};

export default Home;

<style>height {}</style>;
