import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Button = styled.button`
  display: flex;
  border: none;
  gap: 0.729vw;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid #ffffff;
  border-radius: 26.042vw;
  @media (max-width: 992px) {
    gap: 0.438rem;
    border-radius: 16.125rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 1.302vw 2.813vw;
  align-self: center;
  @media (max-width: 992px) {
    padding: 0.807rem 1.744rem;
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
    line-height: 0.775rem;
  }
`;

export const ButtonIcon = styled.img`
  max-width: 1.146vw;
  max-height: 1.146vw;
  padding: 0.729vw;
  @media (max-width: 992px) {
    padding: 0.452rem;
  }
`;
