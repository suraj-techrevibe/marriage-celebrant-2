import { IconType } from "react-icons";


interface NavItem {
  name: string;
  to: string;
  isDropdown?: boolean;
  dropdownItems?: { name: string; to: string }[];
}
export type NavBarProps = {
  links: NavItem[];
  isMobile?: boolean;
  closeMobileMenu?: () => void; // optional callback when menu closes on mobile
  position?: "left" | "right"; // optional, only for desktop layout
  scrolled:boolean
};

export type ImageSliderProps = {
    images: string[];
    imgTitle?: string;  // now optional
    interval?: number;
  
  };

  export type CardProps = {
    icon: IconType;
    title: string;
    description: string;
    highlights?: string[]; // Optional list of highlights
    size:number
  };
  
  // Props for ServiceTemplate component
  export type ServiceTemplateProps = {
    heading: string;
    para?: string;
    link?: string;
    para1: string;
    para2?: string;
    para3?: string;
    imgTitle?: string;
    img: string | string[];
    planItems?: string[];
    providerItems?: string[];
    planTitle?: string;
    providerTitle?: string;
    highlightedWords?: string[];
  };
  

  export type SimpleSliderProps= {
    images?: string[];
    interval?: number;
  }