import React from 'react'
import { Navbar, Footer } from '.';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}