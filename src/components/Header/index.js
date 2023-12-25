import * as React from "react";
import styled from "styled-components";

function Header(props) {
  return (
    <DivHeader>
      <Img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9893c3705fa876f2305bdc2c2859639b45350cb79c649a96e9c2f3222244e43?apiKey=fc32886fc80f49d6bef857ba01c670ab&"
      />
      <Selector>
        <SelectorPara>Home</SelectorPara>
        <SelectorPara>CAREER</SelectorPara>
        <SelectorPara>Services</SelectorPara>
        <SelectorPara>About Us</SelectorPara>
        <SelectorPara>Clients</SelectorPara>
        <SelectorPara>Tech Stack</SelectorPara>
      <Img2
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/130d2e61aca47d1d9e7740c2bdc96a053d687d1a3f714c93bd8e0fbb8db8e70b?apiKey=fc32886fc80f49d6bef857ba01c670ab&"
      />
      </Selector>
    </DivHeader>
  );
}

const DivHeader = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: white;
  width: 100vw;
  padding: 20px;
  box-sizing: content-box;
`;

const SelectorPara = styled.p`
  @media (max-width: 601px) {
    display: none;
  }
  margin-left: 20px;
  margin-right: 20px;
`

const Selector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Img = styled.img`
  aspect-ratio: 4.67;
  object-fit: contain;
  object-position: center;
  width: 201px;
  overflow: hidden;
  max-width: 100%;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

export default Header;