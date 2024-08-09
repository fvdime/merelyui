export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  id: number;
  label: string;
  href?: string;
  links?: FooterLink[];
}

export interface FooterSocial {
  social: "Github" | "LinkedIn" | "Instagram" | "Facebook" | "Youtube" | "X" | "TikTok" | "Discord";
  href: string;
}

export interface FooterDataProps {
  logo: string;
  content?: string;
  image?: string;
  href: string;
  links?: FooterSection[];
  socials?: FooterSocial[];
}

export interface FooterProps {
  footerData: FooterDataProps[];
  secondary?: boolean;
  tertiary?: boolean;
  quaternary?: boolean;
}