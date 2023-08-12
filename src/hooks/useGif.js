import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? tagurl : randomurl);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData("Hello");
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
