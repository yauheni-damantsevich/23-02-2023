import styled from "@emotion/styled";

export const BottomBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 1.146vw;
  margin: 0 0 1.146vw 0;
  @media (max-width: 992px) {
    gap: 0.711rem;
    margin: 0 0 0.711rem 0;
  }
`;

export const BlockIcon = styled.img``;

export const BottomBlockTitle = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 0.885vw;
  line-height: 1.406vw;
  color: #ffffff;
  @media (max-width: 992px) {
    font-size: 0.549rem;
    line-height: 0.872rem;
  }
`;

export const BottomBlockTitleSpan = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 0.885vw;
  line-height: 1.406vw;
  color: #ffffff;
  @media (max-width: 992px) {
    font-size: 0.549rem;
    line-height: 0.872rem;
  }
`;

export const VerticalRule = styled.hr`
  width: 1px;
  height: 7.969vw;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  @media (max-width: 992px) {
    height: 4.941vw;
  }
`;
