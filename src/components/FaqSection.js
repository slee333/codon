import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Faq from "./Faq";

function FaqSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Faq
          items={[
            {
              question: "프로그래밍을 1도 모르는데 괜찮나요? ㅠㅠ",
              answer:
                ["네 오히려 환영이에요.", "프로그래밍 수업은 기존 프로그래밍 경험이 없는 분들을 대상으로 짜여질 예정이거든요.", "처음 프로그래밍을 접하는 분들도 흥미를 느낄 수 있도록 짤 예정입니다."]
            },
            {
              question: "프로그래밍 수업은 어떤 식으로 진행되나요?",
              answer:
                ["일주일마다 과제가 하나씩 주어지고 이를 하루 날을 잡고 모여서 해결하는 방식으로 진행됩니다.","우선 첫 학기 9~10주간은 파이썬으로 웹페이지를 만들어보고, 다음 학기에는 파이썬 머신러닝 라이브러리를 다루어보는 쪽으로 진행을 계획중이에요."]
            },
            {
              question: "언제부터 시작하나요? 모임 시간은요?",
              answer:
                ["이번 학기 (2019 2학기) 중에 중간 모임을 한번 갖고 다들 모임에서 무엇을 얻기 기대하는지 이야기해볼 겁니다.", "이후 오는 2020년 1학기 개강 후에 인원을 확정짓고 본격적인 모임을 개시할 생각입니다.","인원이 모이면 조정을 해보아야겠지만, 현재로선 일주일에 한번 요일을 잡아 2~3시간정도 모이지 않을까 생각합니다."]
            },
            {
              question: "모임에 참석하려면 꼭 프로그래밍을 해야 하나요?",
              answer:
                ["아니오. 프로그래밍 자체는 하고픈 마음이 없지만 의료 IT에 관심있는 분들이 분명 계실거라 생각되요.","그런 분들을 위해 의료 IT 이슈에 대한 생각, 소식 등을 나누고 이야기할 수 있도록 상술한 아티클 작성 혹은 토론 활동을 생각하고 있어요.","이 두 종류의 활동을 어떻게 조율할지는 모이는 인원을 보고 결정할 생각입니다."]
            },
            {
              question: "혹시 다른 종류의 활동을 하고 싶으면 어떻게 하나요?",
              answer:
                ["저희 모임 주제에 적합하다는 전제 하에 가능한 한 자유로운 활동을 가능하게 하고자 해요.", "우리 모두 관심사도 잘하는 것도 배우고 싶은 것도 각기 조금씩 다르니까요.", "소모임 내에서 이런 활동도 했으면 좋겠다 하는 부분이 있다면 자유롭게 말씀해주시면 됩니다."]
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FaqSection;
