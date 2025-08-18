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

const BlogDetailPageNew = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(89);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Jessica Martinez',
      avatar: 'JM',
      date: '1 day ago',
      content: 'This article opened my eyes to so many digital marketing opportunities I was missing! The ROI calculations are particularly helpful.'
    },
    {
      id: 2,
      author: 'David Kim',
      avatar: 'DK',
      date: '2 days ago',
      content: 'Great insights on social media advertising. I implemented the targeting strategies and already seeing 30% better conversion rates!'
    },
    {
      id: 3,
      author: 'Rachel Thompson',
      avatar: 'RT',
      date: '3 days ago',
      content: 'The email marketing section is gold! Would love to see more content about marketing automation tools.'
    }
  ]);
  const [newComment, setNewComment] = useState('');

  const blogPost = {
    title: 'How Digital Marketing Can Increase Your Profit!',
    subtitle: 'Discover proven strategies to maximize ROI and boost your business revenue through effective digital marketing',
    author: {
      name: 'Govind Bharadwaj',
      avatar: 'GB',
      bio: 'Digital Marketing Strategist with 10+ years of experience helping businesses grow their online presence and revenue',
      socialLinks: {
        twitter:'',
        linkedin: ''
      }
    },
    publishDate: 'March 10, 2024',
    readTime: '6 min read',
    views: 956,
    category: 'Digital Marketing',
    tags: ['Digital Marketing', 'ROI', 'Business Growth', 'Online Marketing', 'Profit'],
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format',
    content: {
      introduction: `In today's digital-first world, businesses that leverage effective digital marketing strategies consistently outperform their competitors. Digital marketing isn't just about having an online presence—it's about strategically using digital channels to drive measurable business growth and increase profitability. This comprehensive guide will show you exactly how to transform your digital marketing efforts into a powerful profit-generating machine.`,
      
      sections: [
        {
          title: 'Understanding Digital Marketing ROI',
          content: `Before diving into specific strategies, it's crucial to understand how digital marketing directly impacts your bottom line. Unlike traditional marketing, digital marketing offers unprecedented transparency and measurability.

Key metrics to track for profit maximization:

• Customer Acquisition Cost (CAC): How much you spend to acquire each new customer
• Customer Lifetime Value (CLV): Total revenue a customer generates over their relationship with your business  
• Return on Ad Spend (ROAS): Revenue generated for every dollar spent on advertising
• Conversion Rate: Percentage of visitors who take desired actions
• Average Order Value (AOV): Average amount customers spend per transaction

By optimizing these metrics, businesses typically see 20-40% improvements in overall profitability within the first quarter of implementation.`
        },
        {
          title: 'Search Engine Optimization (SEO) for Long-term Profits',
          content: `SEO is one of the highest ROI digital marketing strategies, with organic search driving 53% of all website traffic. Unlike paid advertising, SEO builds compound returns over time.

Profitable SEO strategies include:

**Local SEO**: For businesses with physical locations, local SEO can increase foot traffic by 50-80%. Optimize your Google Business Profile, gather customer reviews, and create location-specific content.

**Content Marketing**: High-quality, SEO-optimized content attracts qualified leads at 62% lower cost than traditional marketing. Focus on solving your customers' problems with valuable, searchable content.

**Technical SEO**: Improving site speed, mobile responsiveness, and user experience can boost conversions by 15-25% while improving search rankings.

A well-executed SEO strategy typically generates 14x more leads than traditional outbound marketing methods.`
        },
        {
          title: 'Pay-Per-Click (PPC) Advertising for Immediate Results',
          content: `While SEO builds long-term value, PPC advertising delivers immediate visibility and can generate profits from day one when properly managed.

High-ROI PPC strategies:

**Google Ads**: Target high-intent keywords when customers are actively searching for your products or services. Well-optimized campaigns often achieve 200-400% ROAS.

**Social Media Advertising**: Platforms like Facebook, Instagram, and LinkedIn offer sophisticated targeting options. The average business earns $2 for every $1 spent on social media advertising.

**Retargeting Campaigns**: Re-engage visitors who didn't convert initially. Retargeting campaigns typically see 10x higher click-through rates and can recover 26% of abandoned shopping carts.

**Landing Page Optimization**: A/B test your landing pages to improve conversion rates. Even a 1% improvement in conversion rate can increase annual profits by thousands of dollars for most businesses.`
        },
        {
          title: 'Email Marketing: The Profit Powerhouse',
          content: `Email marketing consistently delivers the highest ROI among all digital marketing channels, with an average return of $42 for every $1 spent.

Profit-maximizing email strategies:

**Segmentation**: Segmented email campaigns generate 58% more revenue than non-segmented campaigns. Divide your audience based on purchase history, engagement level, and demographics.

**Automation**: Set up automated email sequences for welcome series, abandoned cart recovery, and post-purchase follow-ups. Automated emails generate 320% more revenue than regular promotional emails.

**Personalization**: Personalized emails deliver 6x higher transaction rates. Use customer data to tailor content, product recommendations, and offers.

**Mobile Optimization**: 60% of emails are opened on mobile devices. Ensure your emails are mobile-responsive to maximize engagement and conversions.

Businesses that excel at email marketing typically see 40% of their total revenue coming from email campaigns.`
        },
        {
          title: 'Social Media Marketing for Brand Growth and Sales',
          content: `Social media marketing builds brand awareness while driving direct sales, especially for B2C businesses. The key is choosing the right platforms and strategies for your target audience.

Platform-specific profit strategies:

**Instagram**: Visual storytelling and influencer partnerships can drive significant sales for lifestyle and retail brands. Instagram shopping features make it easy for followers to purchase directly.

**LinkedIn**: B2B businesses see excellent results with LinkedIn content marketing and targeted advertising. The platform generates 80% of B2B social media leads.

**Facebook**: With advanced targeting options and diverse ad formats, Facebook remains effective for both B2B and B2C businesses across various industries.

**TikTok**: Younger demographics and viral potential make TikTok increasingly valuable for brands targeting Gen Z and Millennials.

Consistent social media presence can increase brand awareness by 88% and drive 78% more traffic to your website.`
        }
      ],
      
      conclusion: `Digital marketing's power lies in its measurability and scalability. By implementing these strategies systematically and tracking key performance metrics, businesses consistently achieve 25-50% increases in profitability within 6-12 months.

Remember, successful digital marketing is not about using every available channel, but about identifying which strategies work best for your specific business and target audience, then optimizing relentlessly for maximum ROI.

Start with one or two strategies that align with your business goals and resources, master them, then gradually expand your digital marketing arsenal. The businesses that commit to data-driven digital marketing strategies are the ones that thrive in today's competitive marketplace.`
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
                  <h5>Social Media Marketing Strategies That Drive Sales</h5>
                  <p>Learn how to convert social media followers into paying customers...</p>
                  <span className="blog-detail-related-date">March 8, 2024</span>
                </article>
                <article className="blog-detail-related-post">
                  <h5>Email Marketing Automation for E-commerce</h5>
                  <p>Discover automated email sequences that boost revenue by 40%...</p>
                  <span className="blog-detail-related-date">March 5, 2024</span>
                </article>
                <article className="blog-detail-related-post">
                  <h5>Google Ads Optimization Guide 2024</h5>
                  <p>Advanced techniques to maximize your Google Ads ROI...</p>
                  <span className="blog-detail-related-date">March 2, 2024</span>
                </article>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogDetailPageNew;