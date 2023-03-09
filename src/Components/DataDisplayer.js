import ImageDisplayer from "./ImageDisplayer";
import React, { useEffect } from "react";
import NameDisplayer from "./NameDisplayer";
import TitleDisplayer from "./TitleDisplayer";
const getMiddblePoint = (data) => {
  const len = data.length;
  if (len % 2 === 0) {
    return data[len / 2 - 1];
  }
  return data[Math.floor(len / 2)];
};
const DataDisplayer = ({ data, circleRotatedLeft, circleRotatedRight }) => {
  const [currentUserView, setCurrentUserView] = React.useState(
    getMiddblePoint(data)
  );
  useEffect(() => {
    setCurrentUserView(getMiddblePoint(data));
  }, [circleRotatedLeft, circleRotatedRight, currentUserView, data]);
  return (
    <>
      <div className="semi-circle">
        <ImageDisplayer
          data={data[0].image}
          top="75%"
          left="10%"
          zIndex="3"
          width="110px"
          borderRadius="50%"
          // clipPath="polygon(0 0, 100% 0, 100% 100%, 0 0 50% 50% 0)"
        />
        ;
        <ImageDisplayer
          data={data[1].image}
          top="60%"
          left="27%"
          zIndex="3"
          width="110px"
          borderRadius="50%"
          clipPath=""
        />
        ;
        <ImageDisplayer
          data={data[2].image}
          top="50%"
          left="45%"
          zIndex="3"
          width="110px"
          borderRadius="50%"
          clipPath=""
        />
        ;
        <ImageDisplayer
          data={data[3].image}
          top="60%"
          left="63%"
          zIndex="3"
          width="110px"
          borderRadius="50%"
          clipPath=""
        />
        ;
        <ImageDisplayer
          data={data[4].image}
          top="75%"
          left="79%"
          zIndex="3"
          width="110px"
          borderRadius="50%"
          //  clipPath="polygon(0 0, 100% 0, 100% 100%, 0 80%)"
        />
        ;
      </div>
      <NameDisplayer
        data={currentUserView}
        circleRotatedLeft={circleRotatedLeft}
      />
      <TitleDisplayer title={currentUserView.name} />
    </>
  );
};
export default DataDisplayer;
