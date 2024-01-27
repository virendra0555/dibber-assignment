import { createContext, useContext, useState } from "react";

const context = createContext();

function AppContextProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <context.Provider value={{ isModalOpen, setModalOpen }}>
      {children}
    </context.Provider>
  );
}

function useAppContext() {
  return useContext(context);
}

export { useAppContext, AppContextProvider };
