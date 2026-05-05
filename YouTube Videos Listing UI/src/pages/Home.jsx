import React, { useEffect, useState } from "react";
import { fetchVideos } from "../api/videos";
import VideoGrid from "../components/VideoGrid";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchVideos();
      setVideos(data);
      setLoading(false);
    };

    load();
  }, []);

  return (
    <div className="container">
      <h1 className="header">YouTube Feed</h1>

      {loading ? (
        <p className="loading">Loading videos...</p>
      ) : (
        <VideoGrid videos={videos} />
      )}
    </div>
  );
};

export default Home;