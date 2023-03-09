import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import NameDisplayer from "./Components/NameDisplayer";
import ImageDisplayer from "./Components/ImageDisplayer";
import React, { useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import TitleDisplayer from "./Components/TitleDisplayer";
import { AiOutlineArrowDown } from "react-icons/ai";
import DataDisplayer from "./Components/DataDisplayer";

function App() {
  const [actualData, setActualData] = React.useState(data);
  const [circleRotatedLeft, setCircleRoatatedLeft] = React.useState(false);
  const [circleRotatedRight, setCircleRoatatedRight] = React.useState(false);
  const [changedData, setChangedData] = React.useState(data);
  useEffect(() => {
    setActualData(changedData);
  }, [circleRotatedLeft, circleRotatedRight, changedData]);
  const handleLeftClick = () => {
    const newData = changedData;
    newData.push(newData.shift());
    setChangedData(newData);
    setCircleRoatatedLeft(!circleRotatedLeft);
  };
  const handleRightClick = () => {
    const newData = changedData;
    newData.unshift(newData.pop());
    setChangedData(newData);
    setCircleRoatatedRight(!circleRotatedRight);
  };
  return (
    <div className="App">
      <div className="semi-circle2" />
      <DataDisplayer
        data={actualData}
        circleRotatedLeft={circleRotatedLeft}
        circleRotatedRight={circleRotatedRight}
      />

      {/* <div class="arc1" /> */}
      <Box>
        <Button
          onClick={handleLeftClick}
          style={{
            position: "absolute",
            top: "50%",
            left: "40%",
          }}
          borderRadius="50%"
          backgroundColor="green"
          color="white"
          _hover={{ backgroundColor: "green" }}
        >
          <AiOutlineArrowDown size={20} />
        </Button>
        <Button
          onClick={handleRightClick}
          style={{
            position: "absolute",
            top: "50%",
            left: "95%",
          }}
          borderRadius="50%"
          backgroundColor="green"
          color="white"
          fontWeight="bold"
          _hover={{ backgroundColor: "green" }}
        >
          <AiOutlineArrowDown size={20} fontWeight="bold" />
        </Button>
      </Box>
    </div>
  );
}

export default App;
