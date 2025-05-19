import React from "react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";
import * as S from "../../styles/home/home";
// image
import FEATURE1 from "../../assets/images/home/feature1.svg";
import FEATURE2 from "../../assets/images/home/feature2.svg";
import FEATURE3 from "../../assets/images/home/feature3.svg";

export default function FeatureItem() {
  return (
    <S.FeatureItemContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <S.FeatureCardContainer $position="right">
          {/* <S.StepP>STEP 01</S.StepP> */}

          <FeatureCard
            img={FEATURE1}
            subtitle={"어려운 개념을 한눈에 이해하는"}
            title={
              <>
                <S.Highlight>개념지도</S.Highlight>를 이용한 시각적 학습
              </>
            }
            description={`복잡한 설명도 개념 지도(지식그래프)로 시각화해 직관적으로 이해할 수 있어요. 
        텍스트를 개념 간 관계 중심으로 재구성해, 글보다 그림으로 더 잘 이해하는 학습자도 쉽게 배울 수 있어요.
또한 보호자나 본인의 목소리를 직접 녹음해, 자기 목소리로 듣는 학습 경험도 가능합니다.`}
          />
        </S.FeatureCardContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <S.FeatureCardContainer>
          <FeatureCard
            img={FEATURE2}
            subtitle={"재미있게 익히는 개념 공부!"}
            title={
              <>
                <S.Highlight>퀴즈</S.Highlight>를 통한
                <S.Highlight> 개념 복습</S.Highlight>
              </>
            }
            description={`학습자가 재미있게 개념을 익힐 수 있도록, 
            총 3가지 퀴즈 유형을 통해 학습 내용을 복습합니다.
- 귀로 듣고 문장 순서 맞추기
- 관련 단어 고르기
- 문장 완성하기
게임처럼 풀어보며 자연스럽게 개념을 반복 학습할 수 있어요.
즐겁고 몰입감 있는 환경 속에서 학습 효과도 함께 높여보세요!`}
          />
          {/* <S.StepP>STEP 02</S.StepP> */}
        </S.FeatureCardContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <S.FeatureCardContainer $position="right">
          {/* <S.StepP>STEP 03</S.StepP> */}
          <FeatureCard
            img={FEATURE3}
            subtitle={"공부하다가 모르는 개념이 나오면?"}
            title={
              <>
                <S.Highlight>맞춤형 챗봇</S.Highlight>으로 질문하기
              </>
            }
            description={`학습 중 이해되지 않는 개념이 있을 때, 챗봇에게 질문하면
지식 그래프 기반으로 정확하고 친절한 설명을 제공합니다.
음성 출력 기능도 함께 제공되어 다양한 학습 환경에 대응할 수 있어요.`}
          />
        </S.FeatureCardContainer>
      </motion.div>
    </S.FeatureItemContainer>
  );
}
