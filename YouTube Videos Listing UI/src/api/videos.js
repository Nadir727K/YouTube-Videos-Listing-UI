export const fetchVideos = async () => {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/youtube/videos"
    );

    const json = await res.json();

    const raw = json?.data?.data || [];

    
    return raw.map((item) => item.items);
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
};