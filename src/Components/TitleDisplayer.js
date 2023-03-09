import { Button } from "@chakra-ui/react";

const TitleDisplayer = ({ title }) => {
  return (
    <Button
      backgroundColor="#c5f8c7"
      color="black"
      variant="outline"
      style={{
        fontSize: "30px",
        fontWeight: "bold",
        position: "absolute",
        top: "80%",
        left: "64%",
        width: "250px",
      }}
    >
      <h1>{title}</h1>
    </Button>
  );
};

export default TitleDisplayer;
