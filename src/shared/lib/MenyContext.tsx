"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Data {
  [key: string]: any;
}

interface DataContextType {
  data: Data;
  setValues: (values: Data) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<Data>({});

  const setValues = (values: Data) => {
    setData(prevData => ({
      ...prevData,
      ...values
    }));
  };

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  // if (!context) {
  //   throw new Error('useData must be used within a DataProvider');
  // }
  return context;
};


