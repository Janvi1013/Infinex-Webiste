import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Heart, 
  MessageCircle, 
  BookOpen,
  ChevronLeft,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Eye,
  ThumbsUp
} from 'lucide-react';

const BlogDetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(142);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'SJ',
      date: '2 days ago',
      content: 'This is exactly what I needed to understand React hooks better. The examples are clear and practical!'
    },
    {
      id: 2,
      author: 'Mike Chen',
      avatar: 'MC',
      date: '3 days ago',
      content: 'Great explanation of useEffect! I\'ve been struggling with the dependency array concept, but this made it click.'
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      avatar: 'ER',
      date: '5 days ago',
      content: 'Love the code examples. Would be great to see a follow-up post on custom hooks!'
    }
  ]);
  const [newComment, setNewComment] = useState('');

  const blogPost = {
    title: 'Understanding React Hooks: A Comprehensive Guide for Modern Development',
    subtitle: 'Master the power of hooks to build more efficient and maintainable React applications',
    author: {
      name: 'Govind Bharadwaj',
      avatar: 'GB',
      bio: 'Senior Frontend Developer with 8+ years of experience building scalable web applications',
      socialLinks: {
        twitter: '',
        linkedin: ''
      }
    },
    publishDate: 'March 15, 2024',
    readTime: '8 min read',
    views: 1284,
    category: 'Development',
    tags: ['React', 'JavaScript', 'Frontend', 'Hooks', 'Tutorial'],
    featuredImage: '/api/placeholder/800/400',
    content: {
      introduction: `React Hooks revolutionized the way we build React applications by allowing us to use state and other React features in functional components. Since their introduction in React 16.8, hooks have become an essential part of modern React development, offering a more intuitive and flexible approach to managing component logic.`,
      
      sections: [
        {
          title: 'What Are React Hooks?',
          content: `React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class component. Hooks are JavaScript functions, but they impose two additional rules:

• Only call Hooks at the top level of your React function
• Only call Hooks from React function components or custom Hooks

The most commonly used hooks are useState, useEffect, useContext, and useReducer, but React provides several built-in hooks, and you can also create your own custom hooks.`
        },
        {
          title: 'useState: Managing Component State',
          content: `The useState hook is the most fundamental hook for managing state in functional components. It returns an array with two elements: the current state value and a function to update it.

Here's a simple example:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

The useState hook can handle any type of state: numbers, strings, booleans, objects, or arrays. When dealing with objects or arrays, remember to create new instances rather than mutating existing ones.`
        },
        {
          title: 'useEffect: Side Effects and Lifecycle',
          content: `The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in React class components.

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]); // Only re-run if userId changes

  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}
\`\`\`

The second argument to useEffect is a dependency array. This tells React to only re-run the effect if one of the dependencies has changed between renders.`
        },
        {
          title: 'Best Practices and Common Pitfalls',
          content: `When working with React Hooks, there are several best practices to keep in mind:

1. **Always include dependencies in useEffect**: Missing dependencies can lead to bugs and stale closures.

2. **Use multiple useEffect hooks**: Separate concerns by using different useEffect hooks for different side effects.

3. **Custom hooks for reusability**: Extract component logic into custom hooks when you need to reuse stateful logic.

4. **Optimize with useMemo and useCallback**: Use these hooks to prevent unnecessary re-renders and computations.

Remember, the goal of hooks is to make your code more readable and maintainable. Don't over-optimize early, but be mindful of performance as your application grows.`
        }
      ],
      
      conclusion: `React Hooks have fundamentally changed how we approach React development. They provide a more direct API to the React concepts you already know, making your code more readable and easier to test. As you continue your React journey, mastering hooks will enable you to build more efficient and maintainable applications.

The key to becoming proficient with hooks is practice. Start by converting some of your existing class components to functional components with hooks, and gradually explore more advanced patterns like custom hooks and optimization techniques.`
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'You',
        avatar: 'YU',
        date: 'Just now',
        content: newComment
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      copy: () => {
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    };

    if (platform === 'copy') {
      shareUrls.copy();
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="blog-detail">
      {/* Header Navigation */}
      <nav className="blog-detail-nav">
        <div className="blog-detail-nav-container">
          <button className="blog-detail-back-btn">
            <ChevronLeft size={20} />
            Back to Blog
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="blog-detail-hero">
        <div className="blog-detail-hero-container">
          <div className="blog-detail-breadcrumb">
            <span>Blog</span>
            <span>/</span>
            <span>{blogPost.category}</span>
          </div>
          
          <h1 className="blog-detail-title">{blogPost.title}</h1>
          <p className="blog-detail-subtitle">{blogPost.subtitle}</p>
          
          <div className="blog-detail-meta">
            <div className="blog-detail-author-info">
              <div className="blog-detail-avatar">
                {blogPost.author.avatar}
              </div>
              <div className="blog-detail-author-details">
                <span className="blog-detail-author-name">{blogPost.author.name}</span>
                <div className="blog-detail-post-info">
                  <Calendar size={16} />
                  <span>{blogPost.publishDate}</span>
                  <Clock size={16} />
                  <span>{blogPost.readTime}</span>
                  <Eye size={16} />
                  <span>{blogPost.views} views</span>
                </div>
              </div>
            </div>
            
            <div className="blog-detail-actions">
              <button 
                className={`blog-detail-like-btn ${isLiked ? 'liked' : ''}`}
                onClick={handleLike}
              >
                <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                {likes}
              </button>
              
              <div className="blog-detail-share">
                <button className="blog-detail-share-btn">
                  <Share2 size={20} />
                  Share
                </button>
                <div className="blog-detail-share-dropdown">
                  <button onClick={() => handleShare('facebook')}>
                    <Facebook size={16} />
                    Facebook
                  </button>
                  <button onClick={() => handleShare('twitter')}>
                    <Twitter size={16} />
                    Twitter
                  </button>
                  <button onClick={() => handleShare('linkedin')}>
                    <Linkedin size={16} />
                    LinkedIn
                  </button>
                  <button onClick={() => handleShare('copy')}>
                    <Link2 size={16} />
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="blog-detail-featured-image">
        <img src={blogPost.featuredImage} alt={blogPost.title} />
      </div>

      {/* Main Content */}
      <main className="blog-detail-main">
        <div className="blog-detail-container">
          <div className="blog-detail-content">
            <article className="blog-detail-article">
              {/* Introduction */}
              <div className="blog-detail-intro">
                <p>{blogPost.content.introduction}</p>
              </div>

              {/* Content Sections */}
              {blogPost.content.sections.map((section, index) => (
                <section key={index} className="blog-detail-section">
                  <h2>{section.title}</h2>
                  <div className="blog-detail-section-content">
                    {section.content.split('\n').map((paragraph, pIndex) => {
                      if (paragraph.startsWith('```')) {
                        const codeContent = section.content.split('```')[1];
                        return (
                          <pre key={pIndex} className="blog-detail-code">
                            <code>{codeContent}</code>
                          </pre>
                        );
                      }
                      if (paragraph.startsWith('•')) {
                        return <li key={pIndex} className="blog-detail-list-item">{paragraph.substring(2)}</li>;
                      }
                      if (paragraph.trim()) {
                        return <p key={pIndex}>{paragraph}</p>;
                      }
                      return null;
                    })}
                  </div>
                </section>
              ))}

              {/* Conclusion */}
              <section className="blog-detail-conclusion">
                <h2>Conclusion</h2>
                <div className="blog-detail-conclusion-content">
                  {blogPost.content.conclusion.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Tags */}
              <div className="blog-detail-tags">
                {blogPost.tags.map((tag, index) => (
                  <span key={index} className="blog-detail-tag">
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Author Bio */}
            <div className="blog-detail-author-bio">
              <div className="blog-detail-author-bio-avatar">
                {blogPost.author.avatar}
              </div>
              <div className="blog-detail-author-bio-content">
                <h3>{blogPost.author.name}</h3>
                <p>{blogPost.author.bio}</p>
                <div className="blog-detail-author-social">
                  <a href={blogPost.author.socialLinks.twitter}>Twitter</a>
                  <a href={blogPost.author.socialLinks.linkedin}>LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="blog-detail-comments">
              <h3>
                <MessageCircle size={24} />
                Comments ({comments.length})
              </h3>

              {/* Comment Form */}
              <div className="blog-detail-comment-form">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="blog-detail-comment-input"
                />
                <button 
                  onClick={handleCommentSubmit}
                  className="blog-detail-comment-submit"
                  disabled={!newComment.trim()}
                >
                  Post Comment
                </button>
              </div>

              {/* Comments List */}
              <div className="blog-detail-comments-list">
                {comments.map((comment) => (
                  <div key={comment.id} className="blog-detail-comment">
                    <div className="blog-detail-comment-avatar">
                      {comment.avatar}
                    </div>
                    <div className="blog-detail-comment-content">
                      <div className="blog-detail-comment-header">
                        <span className="blog-detail-comment-author">{comment.author}</span>
                        <span className="blog-detail-comment-date">{comment.date}</span>
                      </div>
                      <p className="blog-detail-comment-text">{comment.content}</p>
                      <div className="blog-detail-comment-actions">
                        <button className="blog-detail-comment-like">
                          <ThumbsUp size={14} />
                          Like
                        </button>
                        <button className="blog-detail-comment-reply">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blog-detail-sidebar">
            <div className="blog-detail-toc">
              <h4>
                <BookOpen size={18} />
                Table of Contents
              </h4>
              <ul>
                <li><a href="#introduction">Introduction</a></li>
                {blogPost.content.sections.map((section, index) => (
                  <li key={index}>
                    <a href={`#section-${index}`}>{section.title}</a>
                  </li>
                ))}
                <li><a href="#conclusion">Conclusion</a></li>
              </ul>
            </div>

            <div className="blog-detail-related">
              <h4>Related Posts</h4>
              <div className="blog-detail-related-posts">
                <article className="blog-detail-related-post">
                  <h5>Advanced React Patterns You Should Know</h5>
                  <p>Explore render props, compound components, and other advanced patterns...</p>
                  <span className="blog-detail-related-date">March 10, 2024</span>
                </article>
                <article className="blog-detail-related-post">
                  <h5>Building Custom React Hooks</h5>
                  <p>Learn how to create reusable custom hooks for your applications...</p>
                  <span className="blog-detail-related-date">March 8, 2024</span>
                </article>
                <article className="blog-detail-related-post">
                  <h5>React Performance Optimization Tips</h5>
                  <p>Discover techniques to make your React apps faster and more efficient...</p>
                  <span className="blog-detail-related-date">March 5, 2024</span>
                </article>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogDetailPage;