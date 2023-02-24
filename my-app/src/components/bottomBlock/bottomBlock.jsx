import React from "react";
import {
  BottomBlockWrapper,
  Block,
  BlockIcon,
  BottomBlockTitle,
  BottomBlockTitleSpan,
  VerticalRule,
} from "./bottomBlock.styled";
import BottomBlockIcon from "../../assets/Галочка.svg";

export const BottomBlock = () => {
  return (
    <BottomBlockWrapper>
      <Block>
        <BlockIcon src={BottomBlockIcon} />
        <BottomBlockTitle>
          <BottomBlockTitleSpan>Без предоплаты.</BottomBlockTitleSpan>
          <br /> Оплата после ремонта
        </BottomBlockTitle>
      </Block>
      <VerticalRule />
      <Block>
        <BlockIcon src={BottomBlockIcon} />
        <BottomBlockTitle>
          <BottomBlockTitleSpan>Работаем официально</BottomBlockTitleSpan> c
          <br />
          оформлением заказ-нарядов и чеков
        </BottomBlockTitle>
      </Block>
      <VerticalRule />
      <Block>
        <BlockIcon src={BottomBlockIcon} />
        <BottomBlockTitle>
          <BottomBlockTitleSpan>Оригинальные запчасти.</BottomBlockTitleSpan>
        </BottomBlockTitle>
      </Block>
      <VerticalRule />
      <Block>
        <BlockIcon src={BottomBlockIcon} />
        <BottomBlockTitle>
          <BottomBlockTitleSpan>Лучшие цены на рынке</BottomBlockTitleSpan>{" "}
          благодаря прямым <br />
          поставкам запчастей и собственному цеху
          <br /> механической обработки
        </BottomBlockTitle>
      </Block>
    </BottomBlockWrapper>
  );
};
