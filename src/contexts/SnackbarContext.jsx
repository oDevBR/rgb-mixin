import React, { createContext, useState } from "react";

export const SnackbarContext = createContext({
  isDisplayed: false,
  open: () => {},
  close: () => {},
});

export const SnackBarContextProvider = ({ children }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const timeOut = () =>
    setTimeout(() => {
      closeHandler();
    }, 2000);

  const displayHandler = () => {
    setIsDisplayed(true);
    timeOut();
  };

  const closeHandler = () => {
    clearTimeout(timeOut);
    setIsDisplayed(false);
  };

  return (
    <SnackbarContext.Provider
      value={{
        isDisplayed,
        open: displayHandler,
        close: closeHandler,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
