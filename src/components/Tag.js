import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("hello");
  const { gif, loading, fetchData } = useGif(tag);
  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className="w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] font-bold text-2xl underline uppercase">
        Search Your GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <input
        className="w-10/12 text-center text-lg py-2 rounded-lg mb-[2px]"
        onChange={changeHandler}
        value={tag}
      ></input>
      <button
        className="w-10/12 mb-[20px] bg-blue-200 text-lg py-2 rounded-lg"
        onClick={clickHandler}
      >
        Search GIF
      </button>
    </div>
  );
};

export default Tag;
