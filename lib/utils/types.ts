export interface BaseInputProps {
  placeholder: string;
  htmlFor: string;
  value?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  defaultValue?: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  fullWidth?: boolean;
  nooutline?: boolean;
  underline?: boolean;
  transparent?: boolean;
  style?: string;
  tll?: string;
  trl?: string;
  bll?: string;
  brl?: string;
}