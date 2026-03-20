import { motion } from 'motion/react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative cursor-pointer overflow-hidden"
    >
      <div className="aspect-[4/5] overflow-hidden bg-zinc-900">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium uppercase tracking-tight">{project.title}</h3>
          <p className="text-xs uppercase tracking-widest opacity-50 mt-1">{project.category}</p>
        </div>
        <span className="text-xs font-mono opacity-30">{project.year}</span>
      </div>
    </motion.div>
  );
}
