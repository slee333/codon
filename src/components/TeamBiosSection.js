import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";
import Logo from "../styles/logo.svg"

function TeamBiosSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <TeamBios
          people={[
            {
              avatar: Logo,
              name: "코돈",
              role: "카카오톡 플러스친구",
              link: "http://pf.kakao.com/_qSmLT/chat"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TeamBiosSection;
