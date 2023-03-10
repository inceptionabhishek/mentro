import React, { useEffect } from "react";
import { Container, Box, Button, ScaleFade } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { Stack } from "@chakra-ui/react";
import { FaStarHalfAlt } from "react-icons/fa";
import ImageDisplayer from "./ImageDisplayer";

function NameDisplayer(props) {
  const [animated, setAnimated] = React.useState(props.circleRotatedLeft);
  const data = props.data;
  const circleRotatedLeft = props.circleRotatedLeft;
  const [timesAnimated, setTimesAnimated] = React.useState(0);
  const roundRating = (rating) => {
    return Math.floor(rating);
  };
  const getDecimalAfterPoint = (rating) => {
    return rating - Math.floor(rating);
  };
  useEffect(() => {
    console.log("circleRotatedLeft", circleRotatedLeft);
    if (circleRotatedLeft) {
      setTimeout(() => {
        setAnimated(false);
        setTimesAnimated(timesAnimated + 1);
      }, 100);
      setTimeout(() => {
        setAnimated(true);
        setTimesAnimated(timesAnimated + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setAnimated(true);
        setTimesAnimated(timesAnimated + 1);
      }, 100);
    }
  }, [circleRotatedLeft]);
  const displayRating = (rating) => {
    return (
      <>
        {roundRating(rating) === 1 ? (
          <Stack direction="row">
            <AiFillStar color="yellow" size={30} />
          </Stack>
        ) : roundRating(rating) === 2 ? (
          <Stack direction="row">
            <AiFillStar color="yellow" size={30} />
            <AiFillStar color="yellow" size={30} />
          </Stack>
        ) : roundRating(rating) === 3 ? (
          <Stack direction="row">
            <AiFillStar color="yellow" size={30} />
            <AiFillStar color="yellow" size={30} />
            <AiFillStar color="yellow" size={30} />
          </Stack>
        ) : roundRating(rating) === 4 ? (
          <Stack direction="row">
            <AiFillStar color="yellow" size={30} />
            <AiFillStar color="yellow" size={30} />
            <AiFillStar color="yellow" size={30} />
            <AiFillStar color="yellow" size={30} />
          </Stack>
        ) : roundRating(rating) === 5 ? (
          <Stack direction="row">
            <AiFillStar color="yellow" size={30} />
            <AiFillStar color="yellow" size={30} />
            <AiFillStar color="yellow" size={30} />
            <AiFillStar color="yellow" size={30} />
            <AiFillStar color="yellow" size={30} />
          </Stack>
        ) : (
          <AiFillStar color="yellow" />
        )}
      </>
    );
  };
  return (
    <>
      <Container
        maxW="container.xl"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        display={{
          base: "block",
          sm: "flex",
          md: "flex",
          lg: "flex",
        }}
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
        }}
        transition="all 0.5s ease"
      >
        <Box p="4" width={400} marginTop={200} marginRight={800}>
          <h3
            style={{
              color: "green",
              fontSize: "70px",
              fontWeight: "bold",
              marginBottom: "20px",
              transition: "all 0.5s ease",
            }}
          >
            {data.rating}
          </h3>
          <Stack
            direction="row"
            style={{
              marginBottom: "20px",
            }}
          >
            {displayRating(roundRating(data.rating))}
            {getDecimalAfterPoint(data.rating) > 0 ? (
              <FaStarHalfAlt color="yellow" size={25} />
            ) : (
              <></>
            )}
          </Stack>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {data.name}
          </h1>
          <h2
            style={{
              fontSize: "20px",
              marginBottom: "30px",
            }}
          >
            {data.title}
          </h2>
          <p
            style={{
              fontSize: "15px",
              marginBottom: "30px",
            }}
          >
            {data.description}
          </p>
          <ScaleFade in={animated}>
            <Button
              variant="outline"
              style={{
                fontSize: "20px",
                marginBottom: "30px",
                backgroundColor: "#609966",
                boxShadow: "0 8px 16px 0 green, 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: "200px",
              }}
            >
              Book a Session
            </Button>
          </ScaleFade>
        </Box>
        <ImageDisplayer
          data={data.image}
          top="40%"
          left="65%"
          zIndex="1"
          width="200px"
          borderRadius="50%"
          // cut the lower left corner
          clipPath=""
        />
      </Container>
    </>
  );
}

export default NameDisplayer;
