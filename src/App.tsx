import React from 'react';
import { Dashboard } from './pages/Dasboard';
import { GlobalStyle } from './styles/global';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  );
}

export default App;
