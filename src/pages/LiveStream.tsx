import React, { useEffect, useState } from "react";

interface Props {}

const LiveStream = (props: Props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  let useHeight = 100;
  if (width < 800 && width > 600) {
    useHeight = 80;
  } else if (width < 600) {
    useHeight = 60;
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: useHeight.toString() + "vh" }}
    >
      <iframe
        src="https://youtu.be/px69Jc0sNeE"
        height={useHeight === 60 ? "" : "80%"}
        width={useHeight === 60 ? "" : "80%"}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
};

export default LiveStream;
