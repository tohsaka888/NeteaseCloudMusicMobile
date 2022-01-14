import { Box, useColorMode } from "@chakra-ui/react";
import { Ellipsis } from "antd-mobile";
import Image from "next/image";
import React from "react";

type Props = {
  playlist: any;
};

function PlaylistIntro({ playlist }: Props) {
  const { colorMode } = useColorMode();
  const shadow =
    colorMode === "dark"
      ? "1px 1px 5px 3px #334d66"
      : "1px 1px 5px 3px #cecece";
  return (
    <Box>
      <Box
        padding="3px"
        boxShadow={shadow}
        w={"80px"}
        h={"80px"}
        position={"relative"}
        mb={"8px"}
      >
        <Image layout="fill" src={playlist.coverImgUrl} alt={playlist.id} />
      </Box>
      <Ellipsis
        content={playlist.name}
        rows={1}
        style={{ width: "80px", fontSize: "10px" }}
      />
    </Box>
  );
}

export default PlaylistIntro;
