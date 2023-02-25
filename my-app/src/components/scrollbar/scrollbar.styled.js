import styled from "@emotion/styled";
import { ReactComponent as ScrollThumbIcon } from "../../assets/Иконка мышки.svg";

export const ScrollBarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: calc(29.375vw + 1.979vw);
`;

export const Title = styled.p`
  position: relative;
  max-width: 4.792vw;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 0.833vw;
  line-height: 1.302vw;
  color: #efefef;
  transform: rotate(-90deg);
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(-50% - 25.417vw);
    width: 25.417vw;
    height: 1px;
    background: #efefef;
  }
`;

export const ScrollThumb = styled(ScrollThumbIcon)`
  align-self: center;
`;
