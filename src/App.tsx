import React, { FC } from 'react';
import { Advantages } from './components/Advantages/Advantages';
import { Demo } from './components/Demo/Demo';
import { Footer } from './components/Footer/Footer';
import { Heading } from './components/Heading/Heading';

export const App: FC = () => {
  return (
    <>
      <Heading />
      <Advantages />
      <Demo />
      <Footer />
    </>
  );
};
