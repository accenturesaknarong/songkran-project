import React, { createContext, useContext, useState } from 'react';
const PagodaContext = createContext();

export const PagodaProvider = ({ children }) => {
  const [value, setValue] = useState('Initial Value');

  return (
    <PagodaContext.Provider value={{ value, setValue }}>
      {children}
    </PagodaContext.Provider>
  );
};

export const usePagodaContext = () => useContext(PagodaContext);