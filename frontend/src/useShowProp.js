import React, { useState } from "react";

const useShowProp = (objects, key = "", value = "") => {
  const [components, setComponents] = useState(objects);
  console.log(components);
  const addShow = () => {
    setComponents(
      components.map((component) => {
        return {
          ...component,
          show: component[key] === value ? true : false,
        };
      })
    );
  };
  return [components, addShow];
};

export default useShowProp;
