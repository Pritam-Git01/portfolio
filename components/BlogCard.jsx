import { motion } from 'framer-motion';

const BlogCard = ({ blog, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.1
      } 
    }
  };

  // Format the date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        {blog.image ? (
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600">
            <p className="text-gray-500 dark:text-gray-400 font-medium">Blog Image</p>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-md uppercase tracking-wide font-semibold">
            {blog.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{formatDate(blog.date)}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{blog.excerpt}</p>
        <a 
          href={blog.url}
          target='_blank'
          className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;