import React from "react";
import {
  Button,
  ButtonWrapper,
  ButtonLink,
  ButtonIcon,
} from "./secondaryButton.styled";
import SecondaryButtonIcon from "../../assets/MainCall.svg";

export const SecondaryButton = () => {
  const buttonText = "Узнайте стоимость по WhatsApp";

  return (
    <Button>
      <ButtonWrapper>
        <ButtonLink>
          <ButtonIcon src={SecondaryButtonIcon} />
        </ButtonLink>
        <ButtonLink>{buttonText}</ButtonLink>
      </ButtonWrapper>
    </Button>
  );
};
