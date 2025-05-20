import * as S from "../../styles/home/home";
import FeatureCard from "../../components/home/FeatureCard";
import { useRef, useState, useEffect } from "react";
import Header from "../../components/header/header";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// image
import PENCIL from "../../assets/images/home/pencil.svg";
import FEATURE1 from "../../assets/images/home/feature1.svg";
import FEATURE2 from "../../assets/images/home/feature2.svg";
import FEATURE3 from "../../assets/images/home/feature3.svg";
import ARROWDOWN from "../../assets/images/home/arrow-down.svg";
import MAINBG from "../../assets/images/home/bg.png";

//import HOMEFRAME from "../../assets/images/home/homeframe.svg";
import LOGO from "../../assets/images/header/logo.png";
import LOGOIcon1 from "../../assets/images/home/icon1.png";
import LOGOIcon2 from "../../assets/images/home/icon2.png";
import Cloud from "../../assets/images/home/cloud.png";
import FeatureItem from "../../components/home/FeatureItem";

const Home = () => {
  const outerDivRef = useRef();
  const firstPageRef = useRef();
  const secondPageRef = useRef();
  const thirdPageRef = useRef();
  const [currentPage, setCurrentPage] = useState(1); 

  const navigate = useNavigate();
  const [stateUpladButton, setStateUploadButton] = useState(false);

  // 자동으로 페이지 내려가도록 하는 메서드
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextPage();
    }, 7000); // 7초마다

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [currentPage]); // currentPage가 바뀔 때마다 타이머 초기화 (선택 사항)


  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    let nextPageRef;
    let nextPage;

    if (currentPage === 1) { //1->2
      nextPageRef = secondPageRef;
      nextPage = 2;
    } else if (currentPage === 2) { //2->3
      nextPageRef = thirdPageRef;
      nextPage = 3;
    } else {
      nextPageRef = firstPageRef; //3->1
      nextPage = 1;
    }

    const topOffset = nextPageRef.current.offsetTop;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });

    setCurrentPage(nextPage);
  }

  // list 페이지로 이동
  const handleUpladButton = () => {
    navigate("/list");
  };

  return (
    <S.HomeLayout ref={outerDivRef}>
      <S.BackgroundImg src={MAINBG} alt="배경" />
        {/* 첫번째 페이지 */}
        <S.HomeFirstPage ref={firstPageRef}>          <Header />
          <S.HeaderBottomSection>
            <S.Cloud src = {Cloud}></S.Cloud>
            <S.MainLogoAndButton>
              <S.LogoIcon1 src = {LOGOIcon1} ></S.LogoIcon1>
              <S.LogoIcon2 src = {LOGOIcon2} ></S.LogoIcon2>
              {/* <S.HomeFrameImg src={HOMEFRAME} alt="메인 홈 로고"></S.HomeFrameImg> */}
              <S.LogoText>줄글의 미로에서, 지식의 지도까지</S.LogoText>
              <S.LOGO src={LOGO} />
              <S.UploadPdfButton onClick={handleUpladButton}>
                PDF 업로드로 시작해보기
              </S.UploadPdfButton>
            </S.MainLogoAndButton>
            <S.ArrowDownButton onClick={goToNextPage}>
              <S.ArrowDownImg src={ARROWDOWN} alt="아래로 이동" />
            </S.ArrowDownButton>
          </S.HeaderBottomSection>
        </S.HomeFirstPage>
        {/* 두번째 페이지 */}
        <S.HomeSecondPage ref={secondPageRef}>
          <FeatureItem />
          <S.ArrowDownButton onClick={goToNextPage}>
            <S.ArrowDownImg src={ARROWDOWN} alt="아래로 이동" />
          </S.ArrowDownButton>
        {/* <S.HomeSecondPage> */}
        {/* <FeatureItem /> */}
        {/* <S.FeatureCardWrapper>
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
          </S.FeatureCardWrapper> */}
        {/* </S.HomeSecondPage> */}
      </S.HomeSecondPage>
      {/* 세번째 페이지 */}
      <S.HomeThirdPage ref={thirdPageRef}>
        <S.ArrowDownButton onClick={goToNextPage}>
          <S.ArrowDownImg src={ARROWDOWN} alt="처음으로" />
        </S.ArrowDownButton>
      </S.HomeThirdPage>
    </S.HomeLayout>
  );
};

export default Home;
