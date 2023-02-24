import React from "react";
import { useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/Close.svg";
import {
  Container,
  PopupWrapper,
  PopupContent,
  CloseButton,
  Title,
  Description,
  Span,
  Form,
  Input,
  Button,
  CheckboxWrapper,
  Checkbox,
  StyledLink,
  Label,
} from "./popup.styled";

export const Popup = (prop) => {
  const [agreement, setAgreement] = useState(false);
  const handleChange = (e) => {
    setAgreement(e.target.checked);
  };

  return (
    <Container>
      <PopupWrapper>
        <PopupContent>
          <CloseButton onClick={() => prop.state(false)}>
            <CloseIcon />
          </CloseButton>
          <Title>Быстро оставить заявку</Title>
          <Description>
            Введите номер — позвоним вам в течение 5-10 минут в рабочее время
          </Description>
          <Span></Span>
          <Form>
            <Label>Введите ваш номер телефона</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="+ 7 (_ _ _) _ _ _ - _ _ - _ _"
            />
            <Button disabled={!agreement}>Перезвоните мне</Button>
            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                name="agreement"
                onChange={handleChange}
              />
              <Span>
                Нажимая кнопку вы соглашаетесь с условиями
                <StyledLink> Политики конфиденциальности</StyledLink>
              </Span>
            </CheckboxWrapper>
          </Form>
        </PopupContent>
      </PopupWrapper>
    </Container>
  );
};
