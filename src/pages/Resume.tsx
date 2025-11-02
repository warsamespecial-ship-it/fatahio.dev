import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import personalInfo from '../data/personalInfo.json';

const Resume: React.FC = () => {
  const handleDownloadPDF = () => {
    // In a real app, this would download the actual PDF file
    alert('PDF download functionality would be implemented here');
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
            Resume / CV
          </h1>
          <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-8"></div>
          <Button onClick={handleDownloadPDF} variant="primary" size="lg">
            Download PDF
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Personal Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Name:</span> {personalInfo.personal.name}
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Title:</span> {personalInfo.personal.title}
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Email:</span> {personalInfo.personal.email}
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Phone:</span> {personalInfo.personal.phone}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Location:</span> {personalInfo.personal.location}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Work Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Work Experience
            </h2>
            <div className="space-y-8">
              {personalInfo.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-l-4 border-primary dark:border-primary-dark"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-primary dark:text-primary-dark font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h2>
            <div className="space-y-6">
              {personalInfo.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-l-4 border-primary dark:border-primary-dark"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary dark:text-primary-dark font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Certifications
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalInfo.about.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                    className="text-center"
                  >
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.05 }}
                        className="bg-primary dark:bg-primary-dark h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Resume;

