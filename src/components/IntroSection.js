import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features2 from "./Features2";

function IntroSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features2
          items={[
            {
              title: "코돈이 무엇인가요?",
              description:
                ["의과대학 IT 소모임입니다.", "IT 기술이 미래의료에 끼칠 영향을 끼칠지 이야기도 해보고 관련 지식도 쌓기를 목적으로 하는 학술모임이에요."],
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
            },
            {
              title: "쉽게 설명하자면?",
              description:
                ["프로그래밍, 디지털 헬스 등에 관심 있는 사람들끼리 모여 이야기 나누며 자기개발도 하고 재밌는 시간도 보내자는 취지의 모임입니다."],
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default IntroSection;
