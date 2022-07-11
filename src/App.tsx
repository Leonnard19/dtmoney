import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { TransactionsContext, TransactionsProvider } from './TransactionsContext';

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
    <TransactionsProvider>
      <Header onOpenModal={openModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isOpen} onRequestClose={closeModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
