import styled from "@emotion/styled";
import BackgroundImage from "../../assets/bg.png";

export const Container = styled.div`
  max-width: 85.573vw;
  margin: 0 auto;
  padding: 0 0.833vw;
  background: #000000;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 992px) {
    max-width: 53rem;
    padding: 0 0.519rem;
  }
`;

export const MainContent = styled.div`
  padding: 6.667vw 5.99vw 0 5.99vw;
  margin: 0 0 6.458vw 0;
  @media (max-width: 992px) {
    padding: 4.125rem 3.688rem 0 3.688rem;
  }
`;

export const Title = styled.h1`
  max-width: 52.656vw;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 3.385vw;
  line-height: 4.948vw;
  color: #ffffff;
  margin: 0 0 2.344vw 0;
  @media (max-width: 992px) {
    max-width: 32.625rem;
    font-size: 2.094rem;
    line-height: 3.063rem;
  }
`;

export const TitleSpan = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 3.385vw;
  line-height: 4.948vw;
  color: #ffffff;
  @media (max-width: 992px) {
    font-size: 2.094rem;
    line-height: 3.063rem;
  }
`;

export const Description = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 1.406vw;
  line-height: 2.344vw;
  color: #ffffff;
  margin: 0 0 2.344vw 0;
  @media (max-width: 992px) {
    font-size: 0.875rem;
    line-height: 1.438rem;
    margin: 0 0 1.438rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.146vw;
  @media (max-width: 992px) {
    gap: 0.711rem;
  }
`;
