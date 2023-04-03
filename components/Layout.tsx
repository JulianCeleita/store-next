import React from 'react'
import Navbar from './Navbar';
import { Footer } from './Footer';


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