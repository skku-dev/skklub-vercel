const { useState, useEffect } = require("react");

const useScreenHeight = () => {
  const [homeContainerHeight, setHomeContainerHeight] = useState(1024);

  useEffect(() => {
    const height = document.documentElement.clientHeight;
    setHomeContainerHeight(height - 201);
  }, []);

  return [homeContainerHeight];
};

export default useScreenHeight;
