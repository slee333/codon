import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";

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
              avatar: "https://cdn.worldvectorlogo.com/logos/kakaotalk.svg",
              name: "카카오톡 ID : ",
              role: "eaglee94"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TeamBiosSection;
