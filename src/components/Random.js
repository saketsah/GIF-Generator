import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }
  return (
    <div className="w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] font-bold text-2xl underline uppercase">
        Random GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <button
        className="w-10/12 mb-[20px] bg-green-200 text-lg py-2 rounded-lg"
        onClick={clickHandler}
      >
        Generate Random GIF
      </button>
    </div>
  );
};

export default Random;
