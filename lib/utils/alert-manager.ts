import { createContext, useContext } from "react";
import { AlertProps } from "../Alert/alert.types";

interface AlertManagerContextProps {
  handleAlert: (alert: Omit<AlertProps, "id">) => void
}

export const AlertManagerContext = createContext<AlertManagerContextProps | null>(null);

export const useAlertManager = () => useContext(AlertManagerContext);