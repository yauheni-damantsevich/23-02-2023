/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Header } from "../header/header";
import {
  SideMenuWrapper,
  SideMenuContent,
  SideMenuItem,
  SideMenuLinkWrapper,
  SideMenuSmallLink,
  SideMenuLink,
  SideMenuBottomContent,
  AddressBlock,
  Icon,
  Description,
  DescriptionSpan,
  PriceCalculatorBlock,
  ContactBlock,
  Wrapper,
  SecondaryDescriptionSpan,
  SocialList,
  SocialItem,
  SocialButton,
  SocialIcon,
} from "./sideMenu.styled";

import MapIcon from "../../assets/Карта.svg";
import PriceCalculator from "../../assets/PriceCalculator.svg";
import avatar from "../../assets/картинка.png";
import WhatsApp from "../../assets/WhatsApp.svg";
import Telegram from "../../assets/Telegram.svg";

export const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <SideMenuContent>
        <SideMenuItem>
          <SideMenuLink
            css={css`
              margin: 0 0 0.875rem 0;
            `}
          >
            Услуги
          </SideMenuLink>
          <SideMenuLinkWrapper>
            <SideMenuSmallLink>Ремонт дивгателей KIA</SideMenuSmallLink>
            <SideMenuSmallLink>Ремонт двигателей HYundai</SideMenuSmallLink>
          </SideMenuLinkWrapper>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuLink>Модели Двигателей</SideMenuLink>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuLink>Отзывы</SideMenuLink>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuLink>Стоимость</SideMenuLink>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuLink>Примеры Работ</SideMenuLink>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuLink>Полезные Статьи</SideMenuLink>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuLink>О Компании</SideMenuLink>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuLink>Контакты</SideMenuLink>
        </SideMenuItem>
      </SideMenuContent>
      <SideMenuBottomContent>
        <AddressBlock>
          <Icon src={MapIcon} alt="Map Icon" />
          <Description>
            Адрес автоцентра: Москва,
            <br />
            <DescriptionSpan>Шоссейный проезд, с4 а/2</DescriptionSpan>
          </Description>
        </AddressBlock>
        <PriceCalculatorBlock>
          <Icon src={PriceCalculator} alt="Map Icon" />
          <Description>
            Рассчитать стоимость ремонта
            <br />
            <DescriptionSpan>за 45 сек</DescriptionSpan>
          </Description>
        </PriceCalculatorBlock>
        <ContactBlock>
          <Icon src={avatar} alt="Map Icon" />
          <Wrapper>
            <Description>
              Есть вопрос? <br />
              <SecondaryDescriptionSpan>
                Задайте его нашему мастеру онлайн
              </SecondaryDescriptionSpan>
            </Description>
            <SocialList>
              <SocialItem>
                <SocialButton>
                  <SocialIcon src={Telegram} alt="WhatsApp" />
                </SocialButton>
              </SocialItem>
              <SocialItem>
                <SocialButton>
                  <SocialIcon src={WhatsApp} alt="Telegram" />
                </SocialButton>
              </SocialItem>
            </SocialList>
          </Wrapper>
        </ContactBlock>
      </SideMenuBottomContent>
    </SideMenuWrapper>
  );
};
