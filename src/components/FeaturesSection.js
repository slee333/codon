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
                  "간단한 프로그래밍을 배워봅니다. 우선 입문하기 좋은 언어인 파이썬부터 시작해 웹디자인과 머신러닝까지 만져보길 목표하고 있어요.",
                image:
                  "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png"
              },
              {
                title: "아티클 작성",
                body:
                  "프로그래밍 이외에도, 의료 IT 관련 사례들을 공부해서 간략한 소감과 함께, 혹은 짤막한 아티클 형태로 공유하는 스터디 역시 계획중입니다.",
                image:
                  "https://uvocorp-com-static3.netdna-ssl.com/freelancewriting/wp-content/uploads/2016/07/Becoming-a-Freelance-Article-Writer.jpg"
              },
              {
                title: "토론",
                body:
                  "의료 IT와 같이 넓은 주제에서 한 가지 토픽을 정해 이야기 나누어보는 시간도 가져도 괜찮지 않을까 싶어요",
                image:
                  "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201904/people-2557399_1920.jpeg?vRenYxoGCjPYALoGt4Hz6Mll8FmG2dQm"
              },
              {
                title: "세미나",
                body:
                  "헬스케어 분야에서 일하고 계신 분들, 혹은 의대를 졸업하고 (헬스케어) 사업을 한다거나 다양한 진로로 나가신 분들을 연사로서 초청하는 활동 역시 생각하고 있습니다.",
                image:
                  "https://image.freepik.com/free-vector/business-people-teamwork-colleague-character-animation-scene-people-seminar-community_40876-1146.jpg"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
