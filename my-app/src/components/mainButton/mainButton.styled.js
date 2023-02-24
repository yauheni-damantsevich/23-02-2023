import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Button = styled.button`
  display: flex;
  border: none;
  gap: 0.729vw;
  background: #fd2016;
  border-radius: 26.042vw;
  @media (max-width: 992px) {
    gap: 0.452rem;
    border-radius: 16.125rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 1.302vw 2.813vw;
  align-self: center;
  @media (max-width: 992px) {
    padding: 0.807rem 1.744vw;
  }
`;

export const ButtonLink = styled(Link)`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 0.833vw;
  line-height: 1.25vw;
  text-decoration: none;
  color: #ffffff;
  white-space: pre-wrap;
  align-self: center;
  &:visited {
    color: #ffffff;
  }
  @media (max-width: 992px) {
    font-size: 0.516rem;
    line-height: 0.75rem;
  }
`;

export const ButtonIcon = styled.img`
  max-width: 1.146vw;
  max-height: 1.146vw;
  padding: 0.729vw;
  @media (max-width: 992px) {
    max-width: 0.711rem;
    max-height: 0.711rem;
    padding: 0.438rem;
  }
`;
