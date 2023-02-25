import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

export const slide = keyframes`
  0% {transform:translateX(-100%);}
	100% {transform:translateX(100%);}
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  border: none;
  gap: 0.729vw;
  background: #fd2016;
  border-radius: 26.042vw;
  overflow: hidden;
  @media (max-width: 992px) {
    gap: 0.452rem;
    border-radius: 16.125rem;
  }
  @media (max-width: 320px) {
    justify-content: center;
    min-height: 3.75rem;
  }
  &:after {
    content: "";
    top: 0;
    transform: translateX(0);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    animation: slide 1s infinite 3s;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    );
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
  @media (max-width: 320px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
    transform: rotate(45deg);
    transition: transform 0.2s linear;
  }
`;
