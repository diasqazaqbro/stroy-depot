'use client'
import React, { ReactNode, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Contacts } from '../LayoutMain/OurContacts/ui/Contacts';
import './Layout.scss';
import { InsideBurger } from '@/entities/Burger/ui/Burger';

interface ILayout {
  children: ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
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

