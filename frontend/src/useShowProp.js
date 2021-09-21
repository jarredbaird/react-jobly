import React, { useState } from "react";

const useShowProp = (objects, key = "", value = "") => {
  const [components, setComponents] = useState(objects);
  setComponents((components) => {
    const componentsWithShow = components.map((component) => component);
    const updated = componentsWithShow.map((component) => {
      const newComponent = {
        ...component,
        show: component[key] === value ? true : false,
      };
      return newComponent;
    });
    return updated;
  });
  return [components, setComponents];
};

export default useShowProp;
