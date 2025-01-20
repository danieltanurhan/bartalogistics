'use client'
import { createContext, useState } from 'react';
import Navbar from './Navbar';

export const QuoteFormContext = createContext();


export function QuoteFormProvider({ children }) {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <QuoteFormContext.Provider value={{ isQuoteFormOpen, setIsQuoteFormOpen }}>
      <Navbar isQuoteFormOpen={isQuoteFormOpen} setIsQuoteFormOpen={setIsQuoteFormOpen}/>
      {children}
    </QuoteFormContext.Provider>
  );
}
