import React from 'react'
import { Navbar } from '.';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>
        <p>This is my footer</p>
      </footer>
    </>
  )
}