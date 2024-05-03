'use client';
import React from 'react';
import { Button, ButtonProps, Typography, styled } from '@mui/material';
import { TsaButtonProps } from '../../../utils/propTypes';

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

export const TsaButton: React.FC<TsaButtonProps> = ({
  name,
  variant = 'contained',
  size = 'large',
  rightIcon,
  leftIcon,
  ...rest
}) => {
  return (
    <CustomButton
      size={size}
      variant={variant}
      color="secondary"
      disableElevation
      startIcon={leftIcon}
      endIcon={rightIcon}
      // sx={variant === `outlined` ? { border: `1px solid #ffffff` } : null}
      {...rest}
    >
      <Typography textTransform={`capitalize`}>{name}</Typography>
    </CustomButton>
  );
};
