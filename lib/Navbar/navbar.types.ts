export interface NavbarLink {
  label: string;
  href: string;
  classname?: string
}

export interface NavbarSocial {
  social: "Github" | "LinkedIn" | "Instagram" | "Facebook" | "Youtube" | "X" | "TikTok" | "Discord";
  label?: string;
  href: string;
}

export interface NavbarIconBase {
  href?: string;
  onClick?: () => void;
  indicator?: string;
}

export interface NavbarIconWithSvg extends NavbarIconBase {
  svg: "shoppingCart" | "notification";
  image?: never;
}

export interface NavbarIconWithImage extends NavbarIconBase {
  image: string;
  svg?: never; 
}

export type NavbarIcon = NavbarIconWithSvg | NavbarIconWithImage;

export interface NavbarButton {
  label: string;
  onClick?: () => void;
}

export interface NavbarDataProps {
  logo: string;
  image?: string;
  href: string;
  button?: NavbarButton[];
  links?:NavbarLink[];
  socials?: NavbarSocial[];
  icons?: NavbarIcon[];
}

export interface NavbarProps {
  navbarData: NavbarDataProps[];
  secondary?: boolean;
  tertiary?: boolean;
  sticky?: boolean;
  modalRef?: React.RefObject<HTMLDivElement>
  theme: string;
}
