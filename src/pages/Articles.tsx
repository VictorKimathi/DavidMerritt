import React from 'react';
const ArticleCard = ({
  title,
  synopsis,
  keywords,
  image,
  alt
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{synopsis}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Keywords:</h4>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                {keyword}
              </span>)}
          </div>
        </div>
        <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
          Read Full Feature <span className="ml-1">→</span>
        </button>
      </div>
    </div>;
};
const Articles = () => {
  const articles = [{
    id: 1,
    title: 'The Comprehensive Guide to Sustainable Home Choices in 2025',
    synopsis: 'An in-depth exploration of eco-friendly materials, energy-efficient systems, and sustainable practices for the modern home, with practical implementation strategies for different budgets.',
    keywords: ['sustainable living', 'eco-friendly home', 'green design', 'energy efficiency'],
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    alt: 'Sustainable home features'
  }, {
    id: 2,
    title: 'Mastering the Art of Decluttering: A Room-by-Room Approach',
    synopsis: 'A comprehensive system for tackling home organization, addressing the psychological aspects of clutter while providing actionable strategies for each living space.',
    keywords: ['home organization', 'decluttering', 'minimalism', 'storage solutions'],
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Organized living room'
  }, {
    id: 3,
    title: 'The Psychology of Color: Designing Spaces That Affect Mood',
    synopsis: 'An examination of how color choices impact emotional wellbeing, with research-backed recommendations for creating specific atmospheres in different rooms.',
    keywords: ['color psychology', 'interior design', 'mood enhancement', 'home atmosphere'],
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    alt: 'Colorful interior spaces'
  }, {
    id: 4,
    title: 'Small Space Revolution: Maximizing Function in Minimal Square Footage',
    synopsis: 'Innovative solutions for apartment dwellers and small-home owners, featuring multifunctional furniture, optical illusions, and space-saving techniques.',
    keywords: ['small spaces', 'apartment living', 'multifunctional furniture', 'space optimization'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Small apartment interior'
  }, {
    id: 5,
    title: 'The New Heirlooms: Investing in Quality Pieces for Generational Value',
    synopsis: 'A guide to identifying and selecting furniture and home goods that will stand the test of time, both in durability and style, creating a legacy of quality.',
    keywords: ['quality furniture', 'heirloom pieces', 'investment home goods', 'timeless design'],
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Quality furniture pieces'
  }];
  return <div className="bg-white w-full pt-16 md:pt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Long-form Articles
        </h1>
        <p className="text-gray-700 mb-8">
          I specialize in creating in-depth, thoroughly researched articles
          (2,500+ words) that provide comprehensive coverage of home and
          lifestyle topics. These pieces balance informative content with
          engaging narratives, keeping readers invested from beginning to end.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {articles.map(article => <ArticleCard key={article.id} title={article.title} synopsis={article.synopsis} keywords={article.keywords} image={article.image} alt={article.alt} />)}
        </div>
      </div>
    </div>;
};
export default Articles;