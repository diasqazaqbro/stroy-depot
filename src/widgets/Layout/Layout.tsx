'use client'
import React, { ReactNode, useState } from 'react';
import Header from './Header/ui/Header';
import Footer from './Footer/ui/footer';
import Contacts from '../LayoutMain/OurContacts/ui/Contacts';
import InsideBurger from '@/entities/Burger/ui/Burger';
import './Layout.scss';

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <div className="darkMenu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <InsideBurger />
        </div>
      )}
      <Header onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <main className="main">
        {children}
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

