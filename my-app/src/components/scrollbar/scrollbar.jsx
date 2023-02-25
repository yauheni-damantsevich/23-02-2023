import React from "react";
import { ScrollBarContainer, Title, ScrollThumb } from "./scrollbar.styled";

export const Scrollbar = () => {
  return (
    <ScrollBarContainer>
      <Title>Scroll Down</Title>
      <ScrollThumb />
    </ScrollBarContainer>
  );
};
