"use client"

import { useState, createContext, ReactNode } from "react";

export const DataContext = createContext({});

export function DataContextProvider({ children}:{ children: ReactNode }) {
  const [firebaseData, setFirebaseData] = useState(null)

  return (
    <DataContext.Provider value={{ firebaseData, setFirebaseData }}>
      {children}
    </DataContext.Provider>
  )
}