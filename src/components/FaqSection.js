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
              question: "모집요건이 따로 있나요?",
              answer:
                "요건은 따로 없어요! \n 1) 프로그래밍을 한번 배워보고도 싶은데 어떻게 접근해야 할지, 뭐부터 배워야 할지 궁금하다 하는 분. \n 2) 디지털 헬스케어, 인공지능 등 분야에 관심있어 관련 이야기도 나누고 하고싶다는 분. \n 3) 임상의 말고도 의과대학생의 다양한 진로 가능성이 궁금하고 또 알아보고 싶다 하시는 분이면 누구든 환영합니다."
            },
            {
              question: "프로그래밍을 1도 모르는데 괜찮나요? ㅠㅠ",
              answer:
                "네 상관없어요. 프로그래밍 수업은 기존 프로그래밍 경험이 없는 분들을 대상으로 진행될 예정입니다."
            },
            {
              question: "프로그래밍 수업은 어떤 식으로 진행되나요?",
              answer:
                "일주일마다 과제가 하나씩 주어지고 이를 하루 날을 잡고 모여서 해결하는 방식으로 진행됩니다. 우선 첫 학기 9~10주간은 파이썬으로 웹페이지를 만들어보고, 다음 학기에는 파이썬 머신러닝 라이브러리를 다루어보는 쪽으로 진행해볼 생각이에요."
            },
            {
              question: "언제부터 시작하나요? 모임 시간은요?",
              answer:
                "오는 2020년 1학기 개강 후에 인원을 확정짓고 본격적인 모임을 개시할 생각입니다. 인원이 모이면 조정을 해보아야겠지만, 현재로선 일주일에 한번 요일을 잡아 2~3시간정도 모이지 않을까 생각합니다."
            },
            {
              question: "꼭 프로그래밍을 해야 하나요?",
              answer:
                "아니오. 프로그래밍 자체는 하고픈 마음이 없지만 IT, 디지털 헬스케어에 관심있는 분들이 분명 계실거라 생각되요. 그런 분들이 의료게 IT 이슈에 대한 생각, 소식 등을 나누고 이야기할 수 있도록 상술한 아티클 작성 혹은 토론 활동도 할까 생각하고 있어요. 이 두 종류의 활동을 어떻게 조율할지는 모이는 인원을 보고 결정할 생각입니다."
            },
            {
              question: "다른 종류의 활동을 하고 싶으면 어떻게 하나요?",
              answer:
                "저희 모임 주제에 적합하다는 전제 하에 가능한 한 자유로운 활동을 가능하게 하고자 해요. 우리 모두 관심사도 잘하는 것도 배우고 싶은 것도 각기 조금씩 다르니까요. 하고싶은 활동이 있다면 자유롭게 말씀해주세요."
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FaqSection;
