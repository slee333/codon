import React from "react";
import HeroSection from "./../components/HeroSection";
import IntroSection from "./../components/IntroSection";
import FeaturesSection from "./../components/FeaturesSection";
import FaqSection from "./../components/FaqSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import ForWhomSection from "./../components/ForWho"
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="info"
        size="large"
        title="코돈"
        subtitle="경북대학교 의과대학 IT 소모임"
        // buttonText="연락하기"
        // buttonOnClick={() => {
        //   router.push("/#contact");
        // }}
      />
      <IntroSection color="white" size="medium" title="" subtitle="" />
      <ForWhomSection
        color="white"
        size="medium"
        title="모집"
        subtitle="즉 이런 분들을 위해 만들어진 소모임입니다."
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="활동"
        subtitle="아래와 같은 활동들을 생각하고 있어요. 중요한건 아직 확정된건 아무것도 없다는 점입니다. 사람이 모이면 구성원들의 관심사에 따라 어떤 활동을 할지 최종적으로 조정할 예정이에요."
      />
      <FaqSection
        color="white"
        size="medium"
        title="질의응답"
        subtitle="궁금하실 만한 내용을 모아 정리해봤어요."
      />
      <TeamBiosSection
        id="contact"
        color="white"
        size="medium"
        title="연락처"
        subtitle="더 궁금하거나 알고싶은 내용이 있다면 아래 카카오톡 플러스친구를 통해 연락주세요."
      />
    </>
  );
}

export default IndexPage;
