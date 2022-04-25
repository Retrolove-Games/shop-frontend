import React, { useState } from "react";

type SidebarContextValue = {
  isSidebarOpened: boolean;
  toggleSidebar: () => void;
};

export const SidebarContext = React.createContext<SidebarContextValue>({
  isSidebarOpened: false,
  toggleSidebar: () => {},
});

export const SidebarProvider: React.FC = ({ children }) => {
  const [isSidebarOpened, setSidebarOpened] = useState<boolean>(false);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpened,
        toggleSidebar: () => setSidebarOpened(!isSidebarOpened),
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = React.useContext(SidebarContext);

  return context;
};
