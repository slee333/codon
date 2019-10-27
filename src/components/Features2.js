import React from "react";
import "./Features2.scss";

function Features2(props) {
  return (
    <div className="Features2">
      {props.items.map((item, index) => (
        <div
          className="Features2__columns columns is-variable is-8 is-vcentered has-text-centered-mobile"
          key={index}
        >
          <div className="column is-half">
            <h3 className="Features2__title title has-text-weight-bold is-spaced is-3">
              {item.title}
            </h3>
            <div className="column">
              <figure className="Features2__image image">
                <img src={item.image} alt={item.title} />
              </figure>
            </div>

            {item.description.map(eachItem => (
              <p className="subtitle">{eachItem}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features2;
