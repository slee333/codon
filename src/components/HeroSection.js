import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import "./HeroSection.scss";

function HeroSection(props) {

  // TODO Apply HeroSection.scss

  return (
    <Section color={props.color} size={props.size}>
      {/* HeroSection.scss가 먹히지 않음 */}
      <div className="container">
        <SectionHeader
          className="sectionHeader"
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={1}
        />
        {/* <div className="buttons is-centered">
          <SectionButton
            parentColor={props.color}
            size="large"
            onClick={props.buttonOnClick}
          >
            {props.buttonText}
          </SectionButton>
        </div> */}
      </div>
    </Section>
  );
}

export default HeroSection;
