import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';
import projectsData from '../data/projects.json';

const Projects: React.FC = () => {
  const projects: Project[] = projectsData as Project[];
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ['All', ...Array.from(techs).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') {
      return projects;
    }
    return projects.filter(project =>
      project.technologies.includes(selectedFilter)
    );
  }, [projects, selectedFilter]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 md:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and experience in software development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedFilter === tech
                  ? 'bg-primary text-white dark:bg-primary-dark shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No projects found with the selected filter.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;

