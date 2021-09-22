import React, { useState } from "react";

const useModalToShow = (key = null) => {
  const [shownModal, setShownModal] = useState(key);
  const unsetModal = () => {
    setShownModal(null);
  };
  return [shownModal, setShownModal, unsetModal];
};

export default useModalToShow;
