import React from 'react';

import './VideoSection.css'; // Import custom CSS for VideoSection

const VideoSection = ({ handleViewAllClick }) => {
  return (
    <div className="video-grid-section">
      <div className="location-grid-header">
        <h2 className="location-grid-title">รีวิว</h2>
      </div>
      <hr className="location-grid-divider" />
      
      {/* Video Embeds */}
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SO_d7yD_FtY?si=TJ-_9W7w6GY_F2gR"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/sEZPHs9dVUM?si=bCCRpipO1vOFg1b0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
