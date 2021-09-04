import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  // const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return videos;
};

export { useInitialState };
