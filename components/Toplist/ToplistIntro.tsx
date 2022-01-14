import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  title: string;
  children: ReactNode;
};

function ToplistIntro({ title = "Test", children }: Props) {
  const { colorMode } = useColorMode();
  const shadow =
    colorMode === "dark"
      ? "0px 0px 1px 0px #334d66"
      : "0px 0px 1px 0px #9b9b9b";
  return (
    <Box
      backdropBlur={0.8}
      padding={"8px"}
      borderRadius={"12px 8px"}
      // border={"1px solid #cecece"}
      boxShadow={shadow}
      marginBottom={"16px"}
    >
      <Flex align="center" marginBottom={"16px"}>
        <Heading size={"md"}>{title}</Heading>
        <MdOutlineKeyboardArrowDown size={25} />
      </Flex>
      {children}
    </Box>
  );
}

export default ToplistIntro;
