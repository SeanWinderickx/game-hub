"use client";

import {
  ChakraProvider,
  ColorModeProvider,
  extendTheme,
} from "@chakra-ui/react";

const theme = extendTheme({});

export function Provider(props: any) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{ initialColorMode: "dark" }}>
        {props.children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}
