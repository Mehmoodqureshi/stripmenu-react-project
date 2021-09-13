import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const sidebarOpen = () => {
    setIsSideBarOpen(true);
  };
  const sidebarClose = () => {
    setIsSideBarOpen(false);
  };
  const submenuOpen = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const submenuClose = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubmenuOpen,
        sidebarOpen,
        submenuOpen,
        sidebarClose,
        submenuClose,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
