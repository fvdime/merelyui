import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Alert } from "merelyui";
import { AlertProps } from "../Alert/alert.types";
import { AlertManagerContext } from "./alert-manager";

export const AlertManagerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [alert, setAlert] = useState<AlertProps | null>(null);

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
  );
};
