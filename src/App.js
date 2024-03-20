import React from 'react'

import Main from './pages/main/Main';
import { MainProvider } from './context/MainContext';

function App() {
  return (
    <MainProvider>
      <Main />
    </MainProvider>
      
  );
}

export default App;