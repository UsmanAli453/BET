import React, { useEffect, useState } from "react";

const TitleManager = () => {
  const [dynamicTitle, setDynamicTitle] = useState(null);

  useEffect(() => {
    const startTitleCycling = () => {
      const titleList = [
        "Welcome to BlackEdgeTech",
        "Innovating Your Future",
        "Exploring New Tech",
      ];

      let index = 0;
      const interval = setInterval(() => {
        setDynamicTitle(titleList[index]);
        index = (index + 1) % titleList.length;
      }, 3000);

      return interval;
    };

    const interval = startTitleCycling();

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (dynamicTitle) {
      document.title = dynamicTitle;
    }
  }, [dynamicTitle]);

  return null;
};

export default TitleManager;
