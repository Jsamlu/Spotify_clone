import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample data (songs / mixes / podcasts)
const items = [
  {
    id: 1,
    title: "Daily Mix 1",
    subtitle: "Arijit Singh, Atif Aslam",
    image: "https://picsum.photos/300?random=1",
  },
  {
    id: 2,
    title: "Chill Hits",
    subtitle: "Relax & Unwind",
    image: "https://picsum.photos/300?random=2",
  },
  {
    id: 3,
    title: "Top Podcasts",
    subtitle: "Trending Now",
    image: "https://picsum.photos/300?random=3",
  },
  {
    id: 4,
    title: "Workout Mix",
    subtitle: "Energy Boost",
    image: "https://picsum.photos/300?random=4",
  },
  {
    id: 5,
    title: "Focus Flow",
    subtitle: "Stay Productive",
    image: "https://picsum.photos/300?random=5",
  },
  {
    id: 6,
    title: "Daily Mix 1",
    subtitle: "Arijit Singh, Atif Aslam",
    image: "https://picsum.photos/300?random=1",
  },
  {
    id: 7,
    title: "Chill Hits",
    subtitle: "Relax & Unwind",
    image: "https://picsum.photos/300?random=2",
  },
  {
    id: 8,
    title: "Top Podcasts",
    subtitle: "Trending Now",
    image: "https://picsum.photos/300?random=3",
  },
  {
    id: 9,
    title: "Workout Mix",
    subtitle: "Energy Boost",
    image: "https://picsum.photos/300?random=4",
  },
  {
    id: 10,
    title: "Focus Flow",
    subtitle: "Stay Productive",
    image: "https://picsum.photos/300?random=5",
  },
];

export default function SpotifyCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Header */}
      <div className="mt-4 mb-4">
        <h2 className="text-xs font-semibold text-gray-400">Made for</h2>
        <h2 className="text-2xl font-bold text-white">jayesh\</h2>
        {/* <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700"
          >
            <ChevronRight className="text-white" />
          </button>
        </div> */}
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 absolute left-0 top-1/2 z-50 shadow-2xl"
          >
            <ChevronLeft className="text-white" />
          </button>
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[180px] bg-transparent rounded-lg p-4 hover:bg-neutral-800 transition cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-md mb-3"
            />
            <h3 className="text-white font-semibold truncate">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-400 truncate">
              {item.subtitle}
            </p>
          </div>
        ))}
        <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700  absolute right-0 top-1/2 z-50 shadow-2xl"
          >
            <ChevronRight className="text-white" />
          </button>
      </div>
    </div>
  );
}

/* Add this to your global CSS (e.g. index.css)
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/
