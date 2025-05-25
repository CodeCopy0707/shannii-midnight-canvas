
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating maintainable and scalable React applications that can grow with your business.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React"
    },
    {
      title: "Modern CSS Techniques for Better UX",
      excerpt: "Explore the latest CSS features and techniques that can enhance user experience and improve website performance.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "CSS"
    },
    {
      title: "Node.js Performance Optimization",
      excerpt: "Discover advanced techniques to optimize your Node.js applications for better performance and scalability.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Node.js"
    },
    {
      title: "TypeScript Best Practices",
      excerpt: "Master TypeScript with these essential best practices that will make your code more robust and maintainable.",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "TypeScript"
    },
    {
      title: "Database Design Principles",
      excerpt: "Understanding fundamental database design principles for building efficient and scalable data systems.",
      date: "2023-12-20",
      readTime: "12 min read",
      category: "Database"
    },
    {
      title: "API Security Best Practices",
      excerpt: "Essential security measures every developer should implement when building and maintaining APIs.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Security"
    }
  ];

  const categories = ["All", "React", "CSS", "Node.js", "TypeScript", "Database", "Security"];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing insights, tutorials, and thoughts about web development, 
              technology trends, and programming best practices.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="p-0">
                  <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                    <span className="text-gray-500">Blog Post Image</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">{post.category}</span>
                  </div>
                  <CardTitle className="mb-3 text-xl">{post.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <section className="mt-20 bg-gray-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter to get the latest articles and tutorials 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors rounded-lg">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
