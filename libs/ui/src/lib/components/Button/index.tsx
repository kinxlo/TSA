import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  name: string;
  base?: boolean;
  outline?: boolean;
};

export const TsaButton = ({ name, base, outline, ...props }: ButtonProps) => {
  return <button {...props} children={name} />;
};
