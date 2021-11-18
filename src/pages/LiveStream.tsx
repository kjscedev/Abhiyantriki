import React from "react";

interface Props {}

const LiveStream = (props: Props) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <iframe
        src="https://www.youtube.com/embed/GtIneRGZFLA"
        height="80%"
        width="80%"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
};

export default LiveStream;
