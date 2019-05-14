import React, { FC } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Terminal } from '../Terminal/Terminal';
import './Heading.scss';

export const Heading: FC = () => {
  return (
    <div className="section section--full heading d-flex">
      <Navbar />
      <div className="heading--logo flex-grow-1 d-flex align-items-center justify-content-center">
        <img src="/img/calculator.svg" alt="Quinvoice" />
      </div>
      <div className="heading--slogan flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <h1>
          The Queen
          <br /> of Invoices
        </h1>
        <Terminal>npm i -G quinvoice</Terminal>
      </div>
    </div>
  );
};
