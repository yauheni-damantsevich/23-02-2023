import React from "react";
import {
  Button,
  ButtonWrapper,
  ButtonLink,
  ButtonIcon,
  PrimarySpan,
  SecondarySpan,
} from "./secondaryButton.styled";
import SecondaryButtonIcon from "../../assets/MainCall.svg";

export const SecondaryButton = () => {
  return (
    <Button>
      <ButtonWrapper>
        <ButtonLink>
          <ButtonIcon src={SecondaryButtonIcon} />
        </ButtonLink>
        <ButtonLink>
          Узнайте стоимость по <PrimarySpan>WhatsApp</PrimarySpan>
          <SecondarySpan>WhatsApp</SecondarySpan>
        </ButtonLink>
      </ButtonWrapper>
    </Button>
  );
};
