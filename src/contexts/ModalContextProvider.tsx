import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextType {
  modal: boolean;
  setModalState: (modalName: string, isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (modalName: string) => {
  const context = useContext<any>(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return {
    isOpen: context[modalName],
    openModal: () => context.setModalState(modalName, true),
    closeModal: () => context.setModalState(modalName, false),
  };
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalState, setModalState] = useState({
    modal: false,
  });

  const contextValue: ModalContextType = {
    ...modalState,
    setModalState: (modalName, isOpen) => {
      setModalState((prevState) => ({
        ...prevState,
        [modalName]: isOpen,
      }));
    },
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};