import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import personalInfo from '../data/personalInfo.json';

const About: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(personalInfo.about.skills.map(skill => skill.category)))];

  const filteredSkills = selectedCategory === 'All'
    ? personalInfo.about.skills
    : personalInfo.about.skills.filter(skill => skill.category === selectedCategory);

  const handleDownloadCV = () => {
    // In a real app, this would download the actual CV file
    alert('CV download functionality would be implemented here');
  };

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
            About Me
          </h1>
          <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto"></div>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-2xl opacity-30"></div>
              <img
                src={personalInfo.personal.image}
                alt={personalInfo.personal.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.personal.name}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              {personalInfo.personal.title}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {personalInfo.about.bio}
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Location:</span> {personalInfo.personal.location}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Email:</span> {personalInfo.personal.email}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Phone:</span> {personalInfo.personal.phone}
              </p>
            </div>
            <Button onClick={handleDownloadCV} variant="primary" size="md">
              Download CV
            </Button>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white dark:bg-primary-dark'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-primary dark:bg-primary-dark h-2.5 rounded-full"
                  />
                </div>
                <div className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                  {skill.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

