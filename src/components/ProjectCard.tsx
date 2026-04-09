import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    description: string;
    images: string[];
    year: string;
  };
  index: number; // 👈 에러 해결의 핵심! 순서 번호(index)를 받겠다고 선언합니다.
}

const ProjectCard = ({ project, index }: ProjectCardProps) => { // 👈 여기도 index를 받도록 추가했습니다.
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasImages = project.images && project.images.length > 0;
  const isSlider = project.images && project.images.length > 1;

  // 좌우 화살표 클릭 시 부드럽게 스크롤
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const clientWidth = scrollRef.current.clientWidth;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -clientWidth : clientWidth);
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // 스크롤 위치에 따라 하단 점(Pagination) 색상 변경
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const index = Math.round(scrollPosition / width);
      setActiveIndex(index);
    }
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* CSS: 스크롤바 숨기기 */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 이미지 슬라이더 영역 */}
      <div className="relative h-[300px] overflow-hidden bg-gray-100 group/slider">
        {hasImages ? (
          <>
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            >
              {project.images.map((img, imgIndex) => (
                <div key={imgIndex} className="w-full h-full flex-shrink-0 snap-center relative">
                  <img
                    src={img}
                    alt={`${project.title} - ${imgIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* 좌우 화살표 버튼 */}
            {isSlider && (
              <>
                <button
                  onClick={() => scroll('left')}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover/slider:opacity-100 transition-opacity z-10"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover/slider:opacity-100 transition-opacity z-10"
                >
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>

                {/* 하단 점(Pagination) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {project.images.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        dotIndex === activeIndex ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image Available
          </div>
        )}
      </div>

      {/* 텍스트 정보 영역 */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            {project.category}
          </p>
          <span className="text-xs text-gray-400 font-medium">{project.year}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;