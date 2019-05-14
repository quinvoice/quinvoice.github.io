import React, { FC, PropsWithChildren } from 'react';
import './Terminal.scss';

export const Terminal: FC<PropsWithChildren<{}>> = (props: PropsWithChildren<{}>) => {
  return (
    <div className="terminal">
      <div className="terminal--inner">{props.children}</div>
    </div>
  );
};
