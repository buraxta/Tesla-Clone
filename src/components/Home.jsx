import React from "react";
import styled from "styled-components";
import Section from "./Section";
import carData from "../data.js";

const Home = () => {
  return (
    <Container>
      {carData.map((car) => {
        const { title, description, backgroundImg, leftBtnText, rightBtnText } =
          car;
        return <Section 
        title={title}
        description={description}
        backgroundImg={backgroundImg}
        leftBtnText={leftBtnText}
        rightBtnText={rightBtnText}
        />;
      })}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
