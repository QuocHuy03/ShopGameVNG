import React, { useEffect } from "react";
import { useModal } from "../../contexts/ModalContextProvider";

type ModalProps = {
  modalName: string;
  children: React.ReactNode;
  onClickStopModal: (event: React.MouseEvent<HTMLDivElement>) => void;
  id?: string;
  size: string;
};

const ModalWrapper: React.FC<ModalProps> = ({
  modalName,
  children,
}) => {
  const { isOpen } = useModal(modalName);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lockScroll");
    } else {
      document.body.classList.remove("lockScroll");
    }
    return () => {
      document.body.classList.remove("lockScroll");
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default ModalWrapper;
