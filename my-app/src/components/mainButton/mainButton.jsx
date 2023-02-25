/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  Button,
  ButtonWrapper,
  ButtonLink,
  ButtonIcon,
  slide,
} from "./mainButton.styled";
import MainButtonIcon from "../../assets/MainButtonIcon.svg";

export const MainButton = () => {
  const buttonText = "Начать расчет стоимости\nремонта вашего двигателя";

  return (
    <Button
      css={css`
        &:after {
          animation: ${slide} 1s ease infinite;
        }
      `}
    >
      <ButtonWrapper>
        <ButtonLink>{buttonText}</ButtonLink>
        <ButtonLink>
          <ButtonIcon src={MainButtonIcon} />
        </ButtonLink>
      </ButtonWrapper>
    </Button>
  );
};
