export interface AlertProps {
  content: string;
  title?: string;
  id?: string;
  onClick?: () => void;
  dismissible?: boolean;
  fullWidth?: boolean;
  status?: "info" | "success" | "warning" | "danger";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top" | "bottom"
  icon?: React.ReactElement;
  theme?: string;
}