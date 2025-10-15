export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface NewsCardProps extends BaseComponentProps {
  id: number;
  title: string;
  content: string;
  date: string;
  tag: string;
  imageUrl: string;
  isDark?: boolean;
  variant?: 'light' | 'dark';
}

export interface CoachCardProps extends BaseComponentProps {
  id: number;
  name: string;
  position: string;
  quote: string;
  imageUrl: string;
}

export interface BurgerButtonProps extends BaseComponentProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface MenuItem {
  id: number;
  label: string;
  href: string;
}

export interface SportsCategory {
  id: number;
  name: string;
}

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large';

export interface MobileMenuProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SportsCategory {
  id: number;
  name: string;
}