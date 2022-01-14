import React from "react";
import { SearchBar } from "antd-mobile";
import { AiOutlineSearch } from "react-icons/ai";
import { Flex, useColorMode } from "@chakra-ui/react";
import { MdWbSunny, MdDarkMode } from "react-icons/md";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center" justify={"space-between"} padding={"12px 16px"}>
      {colorMode === "dark" ? (
        <MdWbSunny size={20} onClick={toggleColorMode} />
      ) : (
        <MdDarkMode size={20} onClick={toggleColorMode} />
      )}
      <SearchBar
        placeholder="请输入搜索内容"
        style={{
          "--background": colorMode === "dark" ? "#7a7a7a" : "#f7f7f7",
          "--placeholder-color": colorMode === "dark" ? "#cecece" : "#333333",
          "--border-radius": "10px",
          width: "80%",
        }}
      />
      <AiOutlineSearch size={20} />
    </Flex>
  );
}

export default Header;
