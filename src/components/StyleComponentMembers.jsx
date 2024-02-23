import styled from "styled-components";

// Global styles
export const GlobalStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    width: 100%;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    background: #f4f2eb;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }
`;

// Styled components for the main structure
export const H1Text = styled.h1`
  font-size: 1.3rem;
  margin: 40px 0;
  color: #2c2c2c;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    background-color: #509bfc;
    color: #fff;
    width: 40px;
    height: 40px;
    box-shadow: 2px 5px 30px rgba(80, 123, 252, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 0 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  position: relative;
  min-width: 250px;
  background-color: #fff;
  box-shadow: 2px 3px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  position: relative;
  border-radius: 10px;
`;

export const TopBar = styled.div`
  width: 50%;
  height: 4px;
  background: #507bfc;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0px 0px 10px 10px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const CheckCircleIcon = styled.i`
  color: #17b667;
`;

export const HeartIcon = styled.i`
  color: rgba(155, 155, 155);
  &::before {
    content: "\f004";
    font-family: fontawesome;
    line-height: 30px;
    cursor: pointer;
    z-index: 1;
    transition: all 0.3s;
  }
`;

export const HeartBtn = styled.input`
  position: absolute;
  top: 25px;
  right: 20px;
  padding: 1rem;
  display: none;
`;

export const HeartLabel = styled.label`
  color: ${({ checked }) => (checked ? "#e41934" : "rgba(155, 155, 155)")};
`;

export const ContentImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100px;
  overflow: hidden;
  object-fit: cover;
  object-position: top;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StrongText = styled.strong`
  font-weight: 500;
  color: #141414;
  margin-top: 10px;
`;

export const RegularText = styled.p`
  font-size: 0.9rem;
  color: #7a7a7a;
  margin: 4px 0px 10px 0px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const IconButton = styled.i`
  margin-right: 9px;
`;

export const ButtonLink = styled.a`
  border-radius: 20px;
  color: #8b8b8b;
  padding: 8px 20px;
  font-size: 0.9rem;
  &:hover {
    color: #fff;
    box-shadow: 2px 5px 15px rgba(80, 123, 252, 0.05);
    background-color: #507bfc;
    transition: all ease 0.5s;
  }
`;
