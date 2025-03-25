import * as S from "../../styles/home/home";
import StandardButton from "../../shared/components/StandardButton";
import FeatureCard from "../../components/home/FeatureCard";
import { useRef, useState, useEffect } from "react";
import Header from "../../components/header/header";
import Modal from "../../components/list/modal/modal";

// image
import PENCIL from "../../assets/images/home/pencil.svg";
import FEATURE1 from "../../assets/images/home/feature1.svg";
import FEATURE2 from "../../assets/images/home/feature2.svg";
import FEATURE3 from "../../assets/images/home/feature3.svg";
import ARROWDOWN from "../../assets/images/home/arrow-down.svg";

const Home = () => {
  const outerDivRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);

  const [stateUpladButton, setStateUploadButton] = useState(false);

  // 스무스하게 움직이는 코드
  useEffect(() => {
    const pageHeight = window.innerHeight;

    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const scrollTop = outerDivRef.current.scrollTop;

      if (deltaY > 0 && currentPage === 1) {
        outerDivRef.current.scrollTo({
          top: pageHeight,
          behavior: "smooth",
        });
        setCurrentPage(2);
      } else if (deltaY < 0 && currentPage === 2 && scrollTop <= pageHeight) {
        outerDivRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setCurrentPage(1);
      }
    };

    const currentDiv = outerDivRef.current;
    currentDiv.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      currentDiv.removeEventListener("wheel", wheelHandler);
    };
  }, [currentPage]);

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    const pageHeight = window.innerHeight;

    if (currentPage === 1) {
      outerDivRef.current.scrollTo({
        top: pageHeight, // 두 번째 페이지로 스크롤
        left: 0,
        behavior: "smooth",
      });
      setCurrentPage(2);
    } else if (currentPage === 2) {
      outerDivRef.current.scrollTo({
        top: pageHeight * 2, // 세 번째 페이지로 스크롤
        left: 0,
        behavior: "smooth",
      });
      setCurrentPage(1);
    }
  };

  // pdf 업로드 모달 나타나는 함수
  const openModal = () => {
    setStateUploadButton(!stateUpladButton);
  };

  return (
    <S.HomeLayout ref={outerDivRef}>
      <S.HomeFirstPage>
        <Header />

        <S.UploadPdfButton onClick={openModal}>
          PDF 업로드로 시작해보기
          <S.PencilImg src={PENCIL} />
        </S.UploadPdfButton>
        <S.ArrowDownButton onClick={goToNextPage}>
          <img src={ARROWDOWN} alt="아래로 이동" />
        </S.ArrowDownButton>
        {stateUpladButton && <Modal onClose={openModal} />}
      </S.HomeFirstPage>
      <S.HomeSecondPage>
        <S.FeatureCardWrapper>
          <S.FeatureCardGrid>
            <FeatureCard
              img={FEATURE1}
              subtitle={"이해가 어려운 우리 아이를 위한"}
              title={
                <>
                  <S.Highlight>개념지도</S.Highlight>를 이용한 학습 서비스
                </>
              }
              description={`난독증 아동이 글을 쉽게 이해할 수 있도록, 텍스트를 그림과 개념 관계도 변환해 학습을 지원
              이를 통해 개념을 직관적으로 익히고 학습 효과를 높일 수 있어요~

              또한 보호자 혹은, 본인의 목소리를 녹음해서 본인의 목소리로 들을 수도 있어요!`}
            />
            <FeatureCard
              img={FEATURE2}
              subtitle={"스트레스 없는 재밌는 공부"}
              title={
                <>
                  <S.Highlight>게임</S.Highlight>을 통한 재미있는{" "}
                  <S.Highlight>개념 학습</S.Highlight>
                </>
              }
              description={
                "난독증 아동이 스트레스 없이 흥미롭게 학습할 수 있도록, 게임을 통해 개념을 자연스럽게 익히는 기능이에요. 글을 부담 없이 접할 수 있도록 유도하며, 즐거운 경험 속에서 효과적으로 학습할 수 있어요~"
              }
            />
            <FeatureCard
              img={FEATURE3}
              subtitle={"공부하다가 모르는 개념이 나오면?"}
              title={
                <>
                  <S.Highlight>맞춤형 챗봇</S.Highlight>으로 질문하기
                </>
              }
              description={
                "발달 장애 아동이 쉽게 정보를 얻을 수 있도록 서비스 내에서 질문하고 검색할 수 있는 챗봇이에요. 이해하기 쉬운 답변과 음성 지원을 제공하며, RAG를 활용해 정확한 정보를 전달하고 AI 오류를 최소화 해요!"
              }
              isWide
            />
          </S.FeatureCardGrid>
        </S.FeatureCardWrapper>
      </S.HomeSecondPage>
    </S.HomeLayout>
  );
};

export default Home;
