import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    description: string;
    images: string[];
    year: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-[300px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {project.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${project.title} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wider">{project.category}</p>
          <span className="text-xs text-gray-400">{project.year}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;