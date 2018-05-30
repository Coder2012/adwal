import React from "react";
import Icon from "./Icon";

const TextItem = (props) => {
  return (
    <section className="item">
      <Icon color={props.iconColor}/>
      <p>
        This is a placeholder for some description about an aspect of the type
        of work done by Adwal on some type of property.
      </p>
    </section>
  );
};

export default TextItem;
