import React from "react";
import * as S from "../../styles/home/home";

export default function FeatureCard({
  img,
  subtitle,
  title,
  description,
  isWide,
}) {
  return (
    <S.FeatureCardLayout isWide={isWide}>
      <S.FeatureImgBox isWide={isWide}>
        <S.FeatureImg src={img} />
      </S.FeatureImgBox>
      <S.FeatureTextBox>
        <S.FeatureSubtitleText>{subtitle}</S.FeatureSubtitleText>
        <S.FeatureTitleText>{title}</S.FeatureTitleText>
        <S.FeatureDescriptionText>{description}</S.FeatureDescriptionText>
      </S.FeatureTextBox>
    </S.FeatureCardLayout>
  );
}
