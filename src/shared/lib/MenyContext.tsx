import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface MenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  return context || { isMenuOpen: false, setIsMenuOpen: () => {} };
};


interface IMenuProvider {
  children?: ReactNode
}

export const MenuProvider: React.FC<IMenuProvider> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(current => !current);
  }, []);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

