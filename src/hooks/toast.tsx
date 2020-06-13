import React, { createContext, useContext, useCallback, useState } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastConstext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message) => {}, []);

  const removeToast = useCallback(() => {
    console.log('removed Toast');
  }, []);

  return (
    <ToastConstext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastConstext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastConstext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
