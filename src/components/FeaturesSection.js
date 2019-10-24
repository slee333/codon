import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";
import "./FeaturesSection.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "프로그래밍",
                body:
                  "간단한 프로그래밍을 배워봅니다. 접근성과 응용력이 좋은 언어인 파이썬을 이용해 웹페이지 디자인부터 구글 파이썬 머신러닝 라이브러리를 이용해 간단한 인공지능도 만들어봅니다.",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
              },
              {
                title: "아티클 작성",
                body:
                  "헬스 IT, 헬스케어 관련해서 인상깊게 읽은 글을 짤막한 소감과 함께, 혹은 짤막한 아티클 형태로 공유하는 활동 역시 계획중입니다.",
                image: "https://uploads.divjoy.com/undraw-directions_x53j.svg"
              },
              {
                title: "토론",
                body:
                  "헬스IT, 헬스케어와 같은 넓은 주제에서 한 가지 토픽을 정해 이야기 나누어보는 시간도 가져도 괜찮지 않을까 싶어요",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg"
              },
              {
                title: "세미나",
                body:
                  "헬스케어 분야에서 일하고 계신 분들, 혹은 의대를 졸업하고 (헬스케어) 사업을 한다거나 다양한 진로로 나가신 분들을 연사로서 초청하는 활동 역시 생각하고 있습니다.",
                image:
                  "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
