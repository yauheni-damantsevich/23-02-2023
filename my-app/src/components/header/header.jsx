/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  Container,
  MainWrapper,
  MainTopWrapper,
  LogoWrapper,
  LogoBlock,
  PriceCalculatorBlock,
  AddressBlock,
  QuestionBlock,
  MapBlock,
  Icon,
  DescriptionBlock,
  Description,
  HeaderButton,
  Span,
  SocialList,
  SocialItem,
  SocialButton,
  SocialIcon,
  ContactBlock,
  ContactList,
  ContactItem,
  DescriptionNumber,
  ContactIcon,
  MainBottomWrapper,
  MenuButtonList,
  MenuButtonItem,
  MenuButtonLink,
  MenuButton,
  MenuButtonIcon,
  IFrame,
} from "./header.styled";
import LogoIcon from "../../assets/Логотип.svg";
import MapIcon from "../../assets/Карта.svg";
import PointIcon from "../../assets/Point.svg";
import PriceCalculator from "../../assets/PriceCalculator.svg";
import WhatsApp from "../../assets/WhatsApp.svg";
import Telegram from "../../assets/Telegram.svg";
import Viber from "../../assets/Viber.svg";
import SpoilerIcon from "../../assets/Spoiler.svg";
import CallIcon from "../../assets/Call.svg";
import { SideMenu } from "../../components/sideMenu/sideMenu";
import { Popup } from "../../components/popup/popup";

export const Header = () => {
  const mainDescriptionValue =
    "Ремонтируем двигатели \nHyundai и Kia c 2012 года ";
  const addressDescriptionValue =
    "Адрес автоцентра: Москва,\nШоссейный проезд, с4 а/2";
  const mapSpanValue = "Смотреть на карте";
  const priceCalculatorSpanValue = "Рассчитать стоимость \nремонта за 45 сек";
  const questionValue = "Задайте вопрос, \nмы сейчас онлайн";
  const CallDescriptionValue = "Звоните Пн-Сб 10:00 - 21:00 ";
  const CallNumberValue = "+7 (925) 103 33 30";
  const CallValue = "Заказать звонок";
  const [open, setOpen] = React.useState(false);
  const [openPopup, setOpenPopup] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Container>
      <MainWrapper>
        <MainTopWrapper>
          <LogoWrapper>
            <LogoBlock>
              <Icon
                css={css`
                  max-width: 13.313rem;
                  max-height: 3.125rem;
                `}
                src={LogoIcon}
                alt="Logo Icon"
              />
            </LogoBlock>
            <DescriptionBlock>{mainDescriptionValue}</DescriptionBlock>
          </LogoWrapper>
          <AddressBlock>
            <Icon src={MapIcon} alt="Map Icon" />
            <Description>{addressDescriptionValue}</Description>
          </AddressBlock>
          <MapBlock onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Icon
              css={css`
                max-width: 0.75rem;
                max-height: 0.938rem;
              `}
              src={PointIcon}
              alt="Point Icon"
            />
            <HeaderButton>
              <Span>{mapSpanValue}</Span>
            </HeaderButton>
          </MapBlock>
          <PriceCalculatorBlock>
            <Icon src={PriceCalculator} alt="Price Calculator" />
            <HeaderButton>
              <Span>{priceCalculatorSpanValue}</Span>
            </HeaderButton>
          </PriceCalculatorBlock>
          <QuestionBlock>
            <Description>{questionValue}</Description>
            <SocialList>
              <SocialItem>
                <SocialButton>
                  <SocialIcon src={WhatsApp} alt="WhatsApp" />
                </SocialButton>
              </SocialItem>
              <SocialItem>
                <SocialButton>
                  <SocialIcon src={Telegram} alt="Telegram" />
                </SocialButton>
              </SocialItem>
              <SocialItem>
                <SocialButton>
                  <SocialIcon src={Viber} alt="Viber" />
                </SocialButton>
              </SocialItem>
            </SocialList>
          </QuestionBlock>
          <ContactBlock>
            <ContactList>
              <ContactItem>
                <Description
                  css={css`
                    @media (max-width: 320px) {
                      color: ${open ? "#000000" : null};
                    } ;
                  `}
                >
                  {CallDescriptionValue}
                </Description>
              </ContactItem>
              <ContactItem>
                <DescriptionNumber
                  css={css`
                    @media (max-width: 320px) {
                      color: ${open ? "#000000" : null};
                    } ;
                  `}
                >
                  {CallNumberValue}
                </DescriptionNumber>
                <ContactIcon src={SpoilerIcon} alt="Spoiler Icon" />
              </ContactItem>
              <ContactItem>
                <HeaderButton onClick={() => setOpenPopup(!open)}>
                  <Span
                    css={css`
                      @media (max-width: 320px) {
                        color: ${open ? "#000000" : null};
                      } ;
                    `}
                  >
                    {CallValue}
                    <ContactIcon src={CallIcon} alt="Call Icon" />
                  </Span>
                </HeaderButton>
              </ContactItem>
            </ContactList>
          </ContactBlock>
          <MenuButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MenuButtonIcon
              css={css`
                @media (max-width: 320px) {
                  filter: ${open ? "invert(0%) brightness(0%)" : null};
                } ;
              `}
              alt="Menu Icon"
            />
          </MenuButton>
        </MainTopWrapper>
        <MainBottomWrapper>
          <MenuButtonList>
            <MenuButtonItem>
              <MenuButtonLink>Главная</MenuButtonLink>
            </MenuButtonItem>
            <MenuButtonItem>
              <MenuButtonLink>Услуги</MenuButtonLink>
            </MenuButtonItem>
            <MenuButtonItem>
              <MenuButtonLink>Модели Двигателей</MenuButtonLink>
            </MenuButtonItem>
            <MenuButtonItem>
              <MenuButtonLink>Отзывы</MenuButtonLink>
            </MenuButtonItem>
            <MenuButtonItem>
              <MenuButtonLink>Стоимость</MenuButtonLink>
            </MenuButtonItem>
            <MenuButtonItem>
              <MenuButtonLink>Примеры Работ</MenuButtonLink>
            </MenuButtonItem>
            <MenuButtonItem>
              <MenuButtonLink>Полезные Статьи</MenuButtonLink>
            </MenuButtonItem>
            <MenuButtonItem>
              <MenuButtonLink>О Компании</MenuButtonLink>
            </MenuButtonItem>
            <MenuButtonItem>
              <MenuButtonLink>Контакты</MenuButtonLink>
            </MenuButtonItem>
          </MenuButtonList>
        </MainBottomWrapper>
      </MainWrapper>
      {open && <SideMenu />}
      {openPopup && <Popup state={setOpenPopup} />}
      {isHovering && (
        <IFrame
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A937c6b7602f12a3723579b68154aa2db3dcdea6a8de0f426537714248cd6d72c&amp;source=constructor"
          width="500"
          height="400"
          frameborder="0"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      )}
    </Container>
  );
};
