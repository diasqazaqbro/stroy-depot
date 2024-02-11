import React, { ReactNode } from 'react';
import { MenuProvider } from './MenyContext';

interface IMenuContextProvider {
  children: ReactNode
}

const MenuContextProvider: React.FC<IMenuContextProvider> = ({ children }) => {
  return <MenuProvider>{children}</MenuProvider>;
};

export default MenuContextProvider;