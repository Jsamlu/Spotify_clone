import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoPlaySharp } from "react-icons/io5";
// Sample data (songs / mixes / podcasts)

export default function Carousel({items, title="", subtitle=""}) {
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
        <h2 className="text-xs font-semibold text-gray-400">{subtitle}</h2>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
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
            className="min-w-[180px] bg-transparent rounded-lg p-4 hover:bg-neutral-800 transition cursor-pointer grid relative group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-md mb-3 w-full h-auto grid-rows-2"
            /> <button className="absolute text-transparent translate-y-3 group-hover:translate-y-0 group-hover:text-black group-hover:bg-green-500 rounded-full text-2xl bottom-1/3 right-6 pl-2 pr-2 py-2 transition-all duration-200 hover:scale-110">
                          <IoPlaySharp />
                        </button>
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

