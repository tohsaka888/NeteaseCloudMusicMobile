import { Box, Flex, Button } from "@chakra-ui/react";
import { Ellipsis } from "antd-mobile";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import Image from "next/image";
import React from "react";

type Props = {
  songs: any[];
  isToplist?: boolean;
};

function SongIntro({ songs, isToplist = false }: Props): JSX.Element {
  return (
    <Box w={isToplist ? screen.availWidth - 72 : screen.availWidth - 56}>
      {songs.map((item, index) => {
        const album: any = item.al;
        let artists = "";
        artists += item.ar.map((item: any) => item.name);
        return (
          <Flex key={index} marginBottom={"16px"}>
            <Image
              src={album.picUrl}
              width={"60px"}
              height={"60px"}
              alt={album.name}
            />
            <Flex
              marginLeft={"8px"}
              justify={"space-between"}
              w={"100%"}
              align="center"
            >
              <Flex flexDir={"column"} justify={"center"}>
                <Ellipsis
                  content={album.name}
                  style={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                    fontWeight: "bold",
                  }}
                  rows={1}
                />
                <Ellipsis content={artists} rows={1} />
              </Flex>
              <MdOutlinePlayCircleFilled size={30} />
            </Flex>
          </Flex>
        );
      })}
    </Box>
  );
}

export default SongIntro;
