import React from "react";
import { Container, Box, Button } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { Stack } from "@chakra-ui/react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
const ImageDisplayer = (props) => {
  const zIndex = props.zIndex;
  const image = props.data;
  const top = props.top;
  const left = props.left;
  const width = props.width;
  const borderRadius = props.borderRadius;
  const clipPath = props.clipPath;
  console.log("width", width);
  return (
    <Box>
      <Image
        src={image}
        alt="image"
        display={{
          base: "none",
          sm: "none",
          md: "block",
          lg: "block",
        }}
        width={width}
        height={width}
        borderRadius={borderRadius}
        // marginLeft={{
        //   base: "0px",
        //   sm: "0px",
        //   md: "200px",
        //   lg: "200px",
        // }}
        // marginTop={{
        //   base: "0px",
        //   sm: "0px",
        //   md: "100px",
        //   lg: "200px",
        // }}
        position="absolute"
        top={top}
        left={left}
        zIndex={zIndex}
        clipPath={clipPath}
      />
    </Box>
  );
};

export default ImageDisplayer;
