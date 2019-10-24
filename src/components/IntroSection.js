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
              title: "코돈? 뭐 하는 덴가요?",
              description:
                "예비 의료인으로서 IT 기술이 가져올 미래 의료의 변화에 대해 고민해보고 이에 대한 지식과 견문을 쌓기를 목적으로 하는 의료 IT 소모임입니다!",
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
            },
            {
              title: ";; 더 쉬운 설명은 없나요?",
              description:
                "간단히 말해 프로그래밍, 디지털 헬스 등에 관심 있는 사람들끼리 모여 이야기나누며 재밌게 시간 보내자는 모임입니다.",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg"
            },
            {
              title: "이 과정에서..",
              description:
                "기초적인 프로그래밍 지식도 함양하고 디지털 기술 발전이 미래 의료 환경에 어떤 영향을 미칠지 생각해보는 시간도 갖는다면 더 좋겠죠?!.",
              image:
                "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default IntroSection;
