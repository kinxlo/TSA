import { AppBarProps, ButtonProps, ContainerProps } from '@mui/material';

// tsa button props
export interface TsaButtonProps extends ButtonProps {
  name: string;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
}

// tsa navbar props
export interface TsaNavbarProps extends AppBarProps {
  navLinks?: string[];
  courses?: string[];
}

// tsa drawer props
export interface TsaNavDrawerProps extends TsaNavbarProps {
  open: boolean;
  onClose: () => void;
}

// tsa drawer props
export interface TsaHeroProps {
  content: object;
}

//tsa wrapper props
export interface TsaWrapperProps extends ContainerProps {
  children: React.ReactElement;
}
