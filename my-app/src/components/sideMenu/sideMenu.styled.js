import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SideMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  z-index: 1;
`;

export const SideMenuContent = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5.563rem 1.375rem 2.375rem 1.375rem;
`;

export const SideMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideMenuLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0.875rem 0;
`;

export const SideMenuSmallLink = styled(Link)`
  align-self: flex-start;
  color: #929292;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.563rem;
  text-decoration: none;
  &:visited {
    color: #929292;
  }
`;

export const SideMenuLink = styled(Link)`
  align-self: flex-start;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;
  color: #1c1c1c;
  margin: 0 0 1.75rem 0;
  &:visited {
    color: #000000;
  }
`;

export const SideMenuBottomContent = styled.div`
  padding: 0 1.375rem;
`;

export const AddressBlock = styled.div`
  display: flex;
  gap: 1.125rem;
  margin: 0 0 2.375rem 0;
`;

export const Icon = styled.img`
  width: 4.063rem;
  height: 4.063rem;
  align-self: center;
`;

export const Description = styled.p`
  align-self: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.188rem;
  white-space: pre-wrap;
  color: #2a2a2a;
  margin: 0 0 0.26vw 0;
`;

export const DescriptionSpan = styled.button`
  background: none;
  position: relative;
  align-self: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.188rem;
  white-space: pre-wrap;
  color: #2a2a2a;
  margin: 0.5rem 0 0 0;
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
`;

export const PriceCalculatorBlock = styled.div`
  display: flex;
  gap: 1.125rem;
  margin: 0 0 2.375rem 0;
`;

export const ContactBlock = styled.div`
  display: flex;
  gap: 1.125rem;
  margin: 0 0 2.375rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.813rem;
`;

export const SecondaryDescriptionSpan = styled.span`
  align-self: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.188rem;
  white-space: pre-wrap;
  color: #2a2a2a;
  margin: 0.5rem 0 0 0;
`;

export const SocialList = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  gap: 0.194rem;
  align-self: center;
  padding: 0 0 0.194rem 0;
`;

export const SocialItem = styled.li``;

export const SocialButton = styled(Link)``;

export const SocialIcon = styled.img``;
