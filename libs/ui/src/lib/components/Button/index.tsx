'use client';
import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface TsaButtonProps extends ButtonProps {
  name: string;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  rightIcon?: any; // Change 'any' to the specific type of your icon component if possible
  leftIcon?: any; // Change 'any' to the specific type of your icon component if possible
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
