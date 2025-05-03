import React from "react";
import grayThumbnail from "../assets/image/Gray-Thumbnail.jpg";
import greenThumbnail from "../assets/image/Green-Thumbnail.jpg";
import mintThumbnail from "../assets/image/Mint-Thumbnail.jpg";
import pinkThumbnail from "../assets/image/Pink-Thumbnail.jpg";
import grayVideo from "../assets/image/Gray-Video.mp4";
import greenVideo from "../assets/image/Green-Video.mp4";
import mintVideo from "../assets/image/Mint-Video.mp4";
import pinkVideo from "../assets/image/Pink-Video.mp4";
import { FaPlay } from "react-icons/fa";

const videos = [
  {
    src: grayVideo,
    thumbnail: grayThumbnail,
    title: "Gray Silicone Folding Bottle",
  },
  {
    src: greenVideo,
    thumbnail: greenThumbnail,
    title: "Green Silicone Folding Bottle",
  },
  {
    src: mintVideo,
    thumbnail: mintThumbnail,
    title: "Mint Silicone Folding Bottle",
  },
  {
    src: pinkVideo,
    thumbnail: pinkThumbnail,
    title: "Pink Silicone Folding Bottle",
  },
];

const Review = () => {
  const [playing, setPlaying] = React.useState(
    Array(videos.length).fill(false)
  );

  const handlePlay = (index) => {
    setPlaying(playing.map((p, i) => i === index));
  };

  return (
    <div className="bg-gray-50 py-2">
      <h2 className="mb-2 font-bold text-gray-700 text-xl sm:text-xl md:text-2xl lg:text-3xl text-center">
        Video Reviews
      </h2>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-4xl">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center p-2 aspect-video overflow-hidden"
          >
            {!playing[index] ? (
              <button
                className="group flex justify-center items-center w-full h-full"
                onClick={() => handlePlay(index)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="group-hover:opacity-80 w-full h-full object-cover transition"
                />
                <span className="absolute opacity-80 text-white text-4xl group-hover:scale-110 transition">
                  <FaPlay />
                </span>
              </button>
            ) : (
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                onEnded={() => setPlaying(playing.map(() => false))}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
