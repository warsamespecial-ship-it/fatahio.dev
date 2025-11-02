import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {formattedDate}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {post.description}
        </p>
        <Link
          to={post.url || `#`}
          className="text-primary dark:text-primary-dark font-medium hover:underline inline-flex items-center"
        >
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;

