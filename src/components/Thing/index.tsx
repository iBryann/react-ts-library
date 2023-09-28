import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface ThingProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Title = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export const Thing: FC<ThingProps> = ({ children }) => {
  return (
    <>
      <Title />
      <div>{children || `the snozzberries taste like snozzberries`}</div>
    </>
  );
};
