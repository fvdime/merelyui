interface DropdownBase {
  id?: string;
  header?: React.ReactElement;
  body: React.ReactNode;
  footer?: React.ReactElement;
}

interface DropdownWithButton extends DropdownBase {
  button: React.ReactElement;
  label?: never;
}

interface DropdownWithoutButton extends DropdownBase {
  label: string;
  button?: never;
}

export type DropdownProps = DropdownWithButton | DropdownWithoutButton;

export interface DropdownHandle {
  toggleDropdown: () => void;
}