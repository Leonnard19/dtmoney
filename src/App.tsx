import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header onOpenModal={openModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isOpen} onRequestClose={closeModal} />
      <GlobalStyle />
    </>
  );
}
