import React from "react";
import styled from "styled-components";
export default function StandardButton({
  text,
  width,
  height,
  marginTop,
  marginRight,
  onClick,
  marginBottom,
  backgroundColor,
  borderRadius,
}) {
  return (
    <MainLayout
      width={width}
      height={height}
      marginTop={marginTop}
      marginRight={marginRight}
      onClick={onClick}
      marginBottom={marginBottom}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
    >
      {text}
    </MainLayout>
  );
}

const MainLayout = styled.button`
  width: ${({ width }) => width || "20.375rem"};
  height: ${({ height }) => height || "3.25rem"};
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor || "#FE8F00"};
  border-radius: ${({ borderRadius }) => borderRadius || "40px"};
  color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 133.072%; /* 1.16438rem */
  letter-spacing: 0.03063rem;
  margin-top: ${({ marginTop }) => marginTop || "0rem"};
  margin-right: ${({ marginRight }) => marginRight || "0rem"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0rem"};
`;
