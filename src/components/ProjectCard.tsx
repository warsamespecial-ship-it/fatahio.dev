import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-dark rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="primary"
              size="sm"
              className="flex-1"
            >
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

