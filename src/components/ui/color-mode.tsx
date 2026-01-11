"use client";

import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

export function ColorModeButton() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(LuMoon, LuSun);

  return (
    <IconButton
      size="sm"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
    />
  );
}
