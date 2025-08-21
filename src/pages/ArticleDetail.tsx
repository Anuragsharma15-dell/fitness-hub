import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to Articles</span>
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-6">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ 
              __html: article.content
                .split('\n')
                .map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">${line.substring(2)}</h1>`;
                  } else if (line.startsWith('## ')) {
                    return `<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">${line.substring(3)}</h2>`;
                  } else if (line.startsWith('### ')) {
                    return `<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">${line.substring(4)}</h3>`;
                  } else if (line.startsWith('**') && line.endsWith('**')) {
                    return `<h4 class="text-lg font-semibold text-gray-900 mt-4 mb-2">${line.slice(2, -2)}</h4>`;
                  } else if (line.startsWith('- **') && line.includes('**:')) {
                    const [boldPart, ...rest] = line.substring(4).split('**:');
                    return `<li class="mb-2"><strong class="text-gray-900">${boldPart}</strong>: ${rest.join('**:')}</li>`;
                  } else if (line.startsWith('- ')) {
                    return `<li class="mb-1">${line.substring(2)}</li>`;
                  } else if (line.trim() === '') {
                    return '<br>';
                  } else {
                    return `<p class="mb-4 leading-relaxed">${line}</p>`;
                  }
                })
                .join('')
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center space-x-2 mb-4">
            <Tag size={16} className="text-gray-400" />
            <span className="text-sm font-medium text-gray-500">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Enjoyed this article?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get more expert health and fitness insights delivered to your inbox every week. Join thousands of others on their wellness journey.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-r-lg hover:bg-emerald-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link 
                  key={relatedArticle.id}
                  to={`/article/${relatedArticle.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2 line-clamp-2">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 mt-3">
                        <Clock size={12} className="mr-1" />
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetail;