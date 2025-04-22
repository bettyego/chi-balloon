import React from 'react';

const VideoPage = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://www.youtube.com/embed/U267pF2blpk"
        title="Pinchofluxeevents Showcase Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default VideoPage;
