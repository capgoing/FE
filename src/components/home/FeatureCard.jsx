import React from "react";
import * as S from "../../styles/home/home";

export default function FeatureCard({ img, subtitle, title, description }) {
  return (
    <S.FeatureCardLayout>
      <S.FeatureImgBox>
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
