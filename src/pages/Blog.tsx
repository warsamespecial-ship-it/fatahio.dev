import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { BlogPost } from '../types';
import blogData from '../data/blog.json';

const Blog: React.FC = () => {
  const posts: BlogPost[] = blogData as BlogPost[];

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
            Blog & Articles
          </h1>
          <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on software development and technology.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No blog posts available at the moment.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;

