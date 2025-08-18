import React from "react";
import { FaSearch, FaUser, FaComments, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "10 reliable sources to learn about IT solution.",
      date: "11 MAR",
      author: "Admin",
      comments: 13,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop&auto=format",
      link: '/BlogDetail_1'
    },
    {
      id: 2,
      title: "How digital marketing can increase your profit!",
      date: "10 MAR",
      author: "Admin",
      comments: 0,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
      link: '/BlogDetail_2'
    },
    {
      id: 3,
      title: "Simple guidance for you in web development.",
      date: "07 MAR",
      author: "Admin",
      comments: 1,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&auto=format",
      link: '/BlogDetail_1'
    },
    {
      id: 4,
      title: "Seven facts you never knew about mobile app.",
      date: "01 MAR",
      author: "Admin",
      comments: 13,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&auto=format",
      link: '/BlogDetail_1'
    },
    {
      id: 5,
      title: "Five doubts about web design you should clarify.",
      date: "25 FEB",
      author: "Admin",
      comments: 0,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop&auto=format",
      link: '/BlogDetail_1'
    },
    {
      id: 6,
      title: "15 awesome things you can learn from web security.",
      date: "12 FEB",
      author: "Admin",
      comments: 0,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&auto=format",
      link: '/BlogDetail_1'
    },
  ];

  const recentPosts = blogs.slice(0, 3);
  const categories = ["IT Management", "Technology", "UI/UX Design", "Digital Marketing", "SEO Implements"];
  const tags = ["Marketing", "Solutions", "App", "Development", "Security", "Design"];

  return (
    <div className="blog-page">

      {/* Banner Section */}
      <div className="blog-page-banner">
        <div className="blog-page-banner-overlay">
          <h1>Welcome to Our Blog</h1>
          <p>Insights, ideas, and inspiration</p>
        </div>
      </div>
      
      <div className="blog-page-container">
        {/* Sidebar */}
        <aside className="blog-page-sidebar">
          {/* Search */}
          <div className="blog-page-search-box search-section">
            <input type="text" placeholder="Search here..." />
            <button><FaSearch /></button>
          </div>

          {/* Recent Posts */}
          <div className="blog-page-sidebar-section recent-posts-section">
            <h3>Recent Posts</h3>
            {recentPosts.map((post) => (
              <div key={post.id} className="blog-page-recent-post">
                <img src={post.image} alt={post.title} />
                <div>
                  <p>{post.title}</p>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="blog-page-sidebar-section categories-section">
            <h3>Categories</h3>
            <ul>
              {categories.map((cat, idx) => <li key={idx}>{cat}</li>)}
            </ul>
          </div>

          {/* Tags */}
          <div className="blog-page-sidebar-section tags-section">
            <h3>Tags</h3>
            <div className="blog-page-tags">
              {tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Follow Us - Desktop */}
          <div className="blog-page-sidebar-section follow-us-section">
            <h3>Follow Us</h3>
            <div className="blog-page-social-icons">
              <a href="https://www.facebook.com/share/16JQd7VX4T/" target="_blank" rel="noopener noreferrer">
			   <FaFacebookF />
			 </a>
			 <a href="https://www.instagram.com/infinextechnologies?igsh=ZGRyaHBuaG1kNGRi" target="_blank" rel="noopener noreferrer">
			   <FaInstagram />
			 </a>
			 <a href="https://www.linkedin.com/company/infinextechnologies/" target="_blank" rel="noopener noreferrer">
			   <FaLinkedinIn />
			 </a>
            </div>
          </div>
        </aside>

        {/* Blogs */}
        <main className="blogs-page">
          {blogs.map((blog) => (
            <div className="blog-page-card" key={blog.id}>
              <div className="blog-page-img">
                <img src={blog.image} alt={blog.title} />
                <div className="date-badge">{blog.date}</div>
              </div>
              <div className="blog-page-info">
                <div className="blog-page-meta">
                  <span><FaUser /> {blog.author}</span>
                  <span><FaComments /> {blog.comments} Comments</span>
                </div>
                <h4><a href={blog.link}>{blog.title}</a></h4>
                <a href={blog.link}>Read more →</a>
              </div>
            </div>
          ))}
        </main>

        {/* Follow Us - Mobile (appears after blogs) */}
        <div className="blog-page-sidebar-section follow-us-mobile">
          <h3>Follow Us</h3>
          <div className="blog-page-social-icons">
            <FaTwitter /> <FaFacebookF /> <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;