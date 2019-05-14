import React, { FC } from 'react';
import './Footer.scss';

export const Footer: FC = () => {
  return (
    <div className="footer text-center">
      Made with{' '}
      <span role="img" aria-label="hearth">
        ❤️
      </span>
      as an Open Source by Szymon Piecuch 2019
    </div>
  );
};
