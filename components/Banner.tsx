import { Box, useColorMode } from "@chakra-ui/react";
import { Swiper } from "antd-mobile";
import Image from "next/image";
import React from "react";

type Props = {
  banners: any[];
};

function Banner({ banners }: Props) {
  const { colorMode } = useColorMode();
  const shadow =
    colorMode === "light"
      ? "0px 0px 20px 5px #999999"
      : "0px 0px 20px 5px #334d66";
  return (
    <Swiper style={{ boxShadow: shadow }} autoplay>
      {banners.map((item: any, index: number) => {
        return (
          <Swiper.Item
            key={index}
            style={{
              width: "100%",
              position: "relative",
              height: "18vh",
            }}
          >
            <Box>
              <Image src={item.pic} alt={item.bannerId} layout="fill" />
            </Box>
          </Swiper.Item>
        );
      })}
    </Swiper>
  );
}

export default Banner;
