import React, { createContext, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
export const AppContext = createContext({});


interface Props {
  children: any;
}

const AppContextProvider: React.FC<Props> = ({
  children,
}) => {
  
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const isLargeScreen = useMediaQuery({ minWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 980 });
  const sidebarRef: any = useRef();

  const handleDocumentClickSidebar = (event: any) => {
    if (
      !isLargeScreen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target)
    ) {
      setIsOpenSidebar(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleDocumentClickSidebar);
    return () => {
      document.removeEventListener("click", handleDocumentClickSidebar);
    };
  }, [isLargeScreen]);

  return (
    <AppContext.Provider
      value={{
        isOpenSidebar,
        setIsOpenSidebar,
        isLargeScreen,
        isMobile,
        sidebarRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
