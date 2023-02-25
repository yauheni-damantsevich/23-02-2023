import React from "react";
import {
  Container,
  MainContentWrapper,
  Title,
  TitleSpan,
  Description,
  MainContent,
  ButtonWrapper,
  Br,
  Br2,
} from "./main.styled";
import { MainButton } from "../../components/mainButton/mainButton";
import { SecondaryButton } from "../../components/secondaryButton/secondaryButton";
import { BottomBlock } from "../../components/bottomBlock/bottomBlock";
import { Scrollbar } from "../../components/scrollbar/scrollbar";

export const Main = () => {
  return (
    <Container>
      <Scrollbar />
      <MainContentWrapper>
        <MainContent>
          <Title>
            Профессиональный <Br />
            <TitleSpan>ремонт двигателей</TitleSpan> HYUNDAI и KIA
            <Br2 /> с <TitleSpan>гарантией 1 год</TitleSpan> за 4-7 дней
          </Title>
          <Description>
            в специализированном автосервисе полного цикла
          </Description>
          <ButtonWrapper>
            <MainButton />
            <SecondaryButton />
          </ButtonWrapper>
        </MainContent>
        <BottomBlock />
      </MainContentWrapper>
    </Container>
  );
};
