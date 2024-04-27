'use client';
import React from 'react';
import { Button, ButtonProps as MuiButtonProps } from '@mui/material';
import { Icon } from '@iconify/react';

interface TsaButtonProps extends MuiButtonProps {
  name: string;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  rightIcon?: any; // Change 'any' to the specific type of your icon component if possible
  leftIcon?: any; // Change 'any' to the specific type of your icon component if possible
  onClick?: () => void; // Example for onClick event, adjust as needed
}

export const TsaButton: React.FC<TsaButtonProps> = ({
  name,
  variant = 'contained',
  size = 'large',
  rightIcon,
  leftIcon,
  ...rest
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      color="secondary"
      disableElevation
      disableRipple
      startIcon={leftIcon}
      endIcon={rightIcon}
      sx={{ textTransform: 'none' }}
      {...rest}
    >
      {name}
    </Button>
  );
};
