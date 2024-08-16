import React, { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Alert } from "merelyui";
import { AlertProps } from "../Alert/alert.types";


interface AlertManagerContextProps {
  handleAlert: (alert: Omit<AlertProps, "id">) => void
}

const AlertManagerContext = createContext<AlertManagerContextProps | null>(null);

export const useAlertManager = () => useContext(AlertManagerContext);

export const AlertManagerProvider = ({ children }: { children: React.ReactNode }) => {
  const [alert, setAlert] = useState<AlertProps | null>(null)

  const handleAlert = (alert: Omit<AlertProps, "id">) => {
    const id = Date.now().toString();
    setAlert({ ...alert, id });
  };

  const handleRemove = () => {
    setAlert(null);
  };


  return (
    <AlertManagerContext.Provider value={{ handleAlert }}>
      {children}
      {alert &&
        createPortal(
          <Alert {...alert} onClick={handleRemove} />,
          document.body
        )}
    </AlertManagerContext.Provider>
  )
}