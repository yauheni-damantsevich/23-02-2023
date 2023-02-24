import React from "react";
import {
  Button,
  ButtonWrapper,
  ButtonLink,
  ButtonIcon,
} from "./mainButton.styled";
import MainButtonIcon from "../../assets/MainButtonIcon.svg";

export const MainButton = () => {
  const buttonText = "Начать расчет стоимости\nремонта вашего двигателя";

  return (
    <Button>
      <ButtonWrapper>
        <ButtonLink>{buttonText}</ButtonLink>
        <ButtonLink>
          <ButtonIcon src={MainButtonIcon} />
        </ButtonLink>
      </ButtonWrapper>
    </Button>
  );
};
