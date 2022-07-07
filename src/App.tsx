import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { useState } from 'react';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

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
