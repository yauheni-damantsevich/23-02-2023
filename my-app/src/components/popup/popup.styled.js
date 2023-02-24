import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  z-index: 4;
  background: rgba(0, 0, 0, 0.5);
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;

export const PopupContent = styled.div`
  position: relative;
  padding: 3.906vw 3.594vw;
  background: #2a2a2a;
  max-width: 26.042vw;
`;

export const CloseButton = styled.button`
  background: none;
  position: absolute;
  top: 1.823vw;
  left: calc(100% - 2.969vw);
`;

export const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 1.667vw;
  line-height: 2.292vw;
  color: #ffffff;
  margin: 0 0 0.833vw 0;
`;

export const Description = styled.p`
  color: #ffffff;
  margin: 0 0 1.771vw 0;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 0.938vw;
  line-height: 1.458vw;
`;

export const Span = styled.span`
  color: #ffffff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.302vw;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 0.729vw;
  line-height: 19px;
`;

export const Label = styled.label`
  color: #ffffff;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 0.729vw;
  line-height: 0.99vw;
`;

export const Input = styled.input`
  border: none;
  padding: 1.458vw 2.448vw;
  border-radius: 26.042vw;
`;

export const Button = styled.button`
  padding: 1.458vw 2.448vw;
  border-radius: 26.042vw;
  background: #fd2016;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 0.833vw;
  line-height: 1.25vw;
  color: #ffffff;
  &:disabled {
    background: #b0b0b1;
  }
`;

export const CheckboxWrapper = styled.div``;

export const Checkbox = styled.input`
  &:checked {
    accent-color: #fd2016;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fd2016;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 0.729vw;
  line-height: 19px;
  &::visited {
    color: #fd2016;
  }
`;
