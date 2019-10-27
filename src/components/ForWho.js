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
            columns={1}
            items={[
              {
                title: "프로그래밍을 배워보고 싶은 분",
                body: `프로그래밍을 배우고 싶은데 어디서 시작해야 할지, 어떻게 배워야 할지, 내가 맞게 하고 있는지 막막한 분들`,
                
              },
              {
                title: "헬스케어 관심있는 사람",
                body: "의료 IT에 관심있어서 이런 주제로 이야기 나누고 공부하고 비슷한 관심사 가진 사람들끼리 이야기도 해보고 배우기도 하고 싶은 분들",
              },
              {
                title: "다양한 진로가 궁금한 사람",
                body: "임상의 말고도 의과대학생의 다양한 진로 가능성에 대해 공부하고 또 이야기 나눌 장소를 찾는 분들",
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
