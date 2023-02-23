import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 102.688rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.875rem auto 1.375rem auto;
`;

export const MainTopWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 3.563rem;
  margin: 0 0 2.75rem 0;
  &::after {
    content: "";
    position: absolute;
    top: calc(100% + 1.375rem);
    height: 1px;
    background-color: #2a2a2a;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 1.438rem;
`;

export const LogoBlock = styled(Link)``;

export const Icon = styled.img`
  max-width: 2.188rem;
  max-height: 2.188rem;
  align-self: center;
`;

export const DescriptionBlock = styled.p`
  align-self: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  white-space: pre-wrap;
  color: #2a2a2a;
`;

export const PriceCalculatorBlock = styled.div`
  display: flex;
  gap: 0.686rem;
`;

export const AddressBlock = styled.div`
  display: flex;
  gap: 0.686rem;
`;

export const MapBlock = styled.div`
  display: flex;
  gap: 0.686rem;
`;

export const QuestionBlock = styled.div`
  display: flex;
  gap: 1.125rem;
`;

export const Description = styled.p`
  align-self: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  white-space: pre-wrap;
  color: #2a2a2a;
`;

export const Span = styled.span`
  border-bottom: 3px dotted #fd2016;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  white-space: pre-wrap;
  color: #2a2a2a;
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
  gap: 0.373rem;
  align-self: center;
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
  gap: 0.375rem;
`;

export const ContactItem = styled.li`
  display: flex;
`;

export const DescriptionNumber = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 10px;
  color: #2a2a2a;
`;

export const ContactIcon = styled.img`
  padding: 0 0.5rem;
`;

export const MainBottomWrapper = styled.div``;

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
  font-size: 12px;
  line-height: 16px;
  color: #2a2a2a;
  &:visited {
    color: #2a2a2a;
  }
`;
