import React from 'react';
import Modal from 'react-modal';
import { Dashboard } from './pages/Dasboard';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  );
}

export default App;
