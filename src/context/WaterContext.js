import React, { createContext, useContext, useState } from 'react';
const WaterContext = createContext();

export const WaterProvider = ({ children }) => {
  const [value, setValue] = useState('Initial Value');

  return (
    <WaterContext.Provider value={{ value, setValue }}>
      {children}
    </WaterContext.Provider>
  );
};

export const useWaterContext = () => useContext(WaterContext);