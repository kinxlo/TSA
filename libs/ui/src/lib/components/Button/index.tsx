// import { extendTheme, Button, ChakraBaseProvider } from "@chakra-ui/react";
import { ComponentProps } from 'react';
// import globalTheme from "../../themes";

// Assuming extendBaseTheme and theme are set up correctly
// const theme = extendTheme({
//     ...globalTheme,
//     components: {
//         Button,
//     },
// });

type ButtonProps = ComponentProps<'button'> & {
  name: string;
  base?: boolean;
  outline?: boolean;
};

export const TsaButton = ({ name, base, outline, ...props }: ButtonProps) => {
  return (
    // <ChakraBaseProvider theme={theme}>
    <button className={`text-red-500`} {...props} children={name} />
    // </ChakraBaseProvider>
  );
};
