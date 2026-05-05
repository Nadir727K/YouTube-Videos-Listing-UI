import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics, id } = video;

  return (
    <div className="card">
      <img
        className="thumbnail"
        src={snippet?.thumbnails?.medium?.url}
        alt={snippet?.title}
      />

      <div className="content">
        <h3 className="title">{snippet?.title}</h3>

        <p className="channel">{snippet?.channelTitle}</p>

        <div className="meta">
          <span>{statistics?.viewCount || "0"} views</span>
          <span>•</span>
          <span>
            {snippet?.publishedAt
              ? new Date(snippet.publishedAt).toLocaleDateString()
              : "N/A"}
          </span>
        </div>

        {/* optional debug */}
        <small style={{ color: "#555" }}>{id}</small>
      </div>
    </div>
  );
};

export default VideoCard;