import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/MenuIcon.svg";

export const Container = styled.div`
  position: sticky;
  top: 0;
  max-width: 85.573vw;
  margin: 0 auto;
  padding: 0 0.833vw;
  overflow-x: hidden;
  background: #ffffff;
  @media (max-width: 992px) {
    max-width: 53rem;
    padding: 0 0.5rem;
  }
`;

export const MainWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  margin: 1.563vw auto 1.146vw auto;

  @media (max-width: 992px) {
    margin: 0.938rem auto 0.688rem auto;
  }
  @media (max-width: 320px) {
    position: fixed;
  }
`;

export const MainTopWrapper = styled.div`
  display: flex;
  gap: 2.969vw;
  margin: 0 0 2.292vw 0;
  &::after {
    content: "";
    position: absolute;
    top: calc(100% + 1.146vw);
    height: 1px;
    background-color: #2a2a2a;
    width: 100%;
  }
  @media (max-width: 992px) {
    gap: 1.813rem;
    margin: 0 0 0.688rem 0;
    flex-wrap: wrap;
    &::after {
      top: calc(100% + 0.706rem);
    }
  }
  @media (max-width: 320px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    &::after {
      display: none;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 1.198vw;
  @media (max-width: 992px) {
    gap: 0.75rem;
  }
`;

export const LogoBlock = styled(Link)``;

export const Icon = styled.img`
  max-width: 1.823vw;
  max-height: 1.823vw;
  align-self: center;
  @media (max-width: 992px) {
    max-width: 1.125rem;
    max-height: 1.125rem;
  }
  @media (max-width: 320px) {
    max-width: 5.75rem;
    max-height: 1.375rem;
  }
`;

export const DescriptionBlock = styled.p`
  align-self: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 0.573vw;
  line-height: 1.042vw;
  white-space: pre-wrap;
  color: #2a2a2a;
  @media (max-width: 992px) {
    font-size: 0.356rem;
    line-height: 0.625rem;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;

export const PriceCalculatorBlock = styled.div`
  display: flex;
  gap: 0.521vw;
  @media (max-width: 992px) {
    gap: 0.313rem;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;

export const AddressBlock = styled.div`
  display: flex;
  gap: 0.521vw;
  @media (max-width: 992px) {
    gap: 0.313rem;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;

export const MapBlock = styled.div`
  display: flex;
  gap: 0.521vw;
  @media (max-width: 992px) {
    gap: 0.313rem;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;

export const QuestionBlock = styled.div`
  display: flex;
  gap: 0.938vw;
  @media (max-width: 992px) {
    gap: 0.563rem;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;

export const Description = styled.p`
  align-self: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 0.573vw;
  line-height: 0.781vw;
  white-space: pre-wrap;
  color: #2a2a2a;
  margin: 0 0 0.26vw 0;
  @media (max-width: 992px) {
    font-size: 0.356rem;
    line-height: 0.481rem;
    margin: 0 0 0.313rem 0;
  }
  @media (max-width: 320px) {
    color: #ffffff;
  }
`;

export const Span = styled.span`
  background: none;
  position: relative;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 0.573vw;
  line-height: 0.781vw;
  white-space: pre-wrap;
  color: #2a2a2a;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 3px dotted #fd2016;
  }
  &:hover::after {
    width: 50%;
    transition: width 0.2s linear;
  }
  @media (max-width: 992px) {
    font-size: 0.356rem;
    line-height: 0.481rem;
  }
  @media (max-width: 320px) {
    color: #ffffff;
  }
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
`;

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.313vw;
  align-self: center;
  @media (max-width: 992px) {
    gap: 0.194rem;
  }
`;

export const SocialItem = styled.li``;

export const SocialButton = styled(Link)``;

export const SocialIcon = styled.img``;

export const ContactBlock = styled.div`
  flex-shrink: 0;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.313vw;
  @media (max-width: 992px) {
    gap: 0.194rem;
  }
`;

export const ContactItem = styled.li`
  display: flex;
`;

export const DescriptionNumber = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 1.042vw;
  line-height: 0.521vw;
  color: #2a2a2a;
  @media (max-width: 992px) {
    font-size: 0.625rem;
    line-height: 0.313rem;
  }
  @media (max-width: 320px) {
    color: #ffffff;
  }
`;

export const ContactIcon = styled.img`
  padding: 0 0.417vw;
  @media (max-width: 992px) {
    padding: 0 0.25rem;
  }
`;

export const MainBottomWrapper = styled.div`
  @media (max-width: 320px) {
    display: none;
  }
`;

export const MenuButtonList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const MenuButtonItem = styled.li``;

export const MenuButtonLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 0.625vw;
  line-height: 0.833vw;
  color: #2a2a2a;
  &:visited {
    color: #2a2a2a;
  }
  @media (max-width: 992px) {
    font-size: 0.388rem;
    line-height: 0.519rem;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  @media (max-width: 320px) {
    display: block;
  }
`;

export const MenuButtonIcon = styled(MenuIcon)`
  filter: invert(100%) brightness(200%);
`;
