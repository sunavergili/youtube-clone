import React from "react";

import { SiYoutubeshorts } from "react-icons/si";
import { Link } from "react-router-dom";

const Shorts = ({ data }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 text-xl font-bold m-2">
        <SiYoutubeshorts className="text-red-500" />
        <div className=""></div>
        <h1>Shorts</h1>
      </div>
      <div className="flex gap-4  pb-4 overflow-x-hidden ">
        {data?.map((short, key) => (
          <Link to={`/watch?v=${short.videoId}`} key={key} className="group">
            <h1>{Shorts.title} </h1>
            <div className="w-48 h-80 relative overflow-hidden rounded-lg bg-zinc-900">
              <img
                src={
                  short.thumbnail?.[1]?.url || short.thumbnail?.[0]?.url || ""
                }
                alt={short.title}
                className="size-full object-cover transition group-hover:scale-105 overflow-x:hidden"
              />
              <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-top from-black/80 to-transparent p-4">
                <h3 className="text-sm mb-1 line-clamp-2">{short.title} </h3>
                <p className="text-gray-200 text-xs">{short.viewCountText} </p>
                console.log(data);
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shorts;
