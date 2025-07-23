import React from 'react';
const GuideCard = ({
  title,
  takeaways,
  image,
  alt
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">
            Key Takeaways:
          </h4>
          <ul className="list-disc pl-5 text-gray-700">
            {takeaways.map((item, index) => <li key={index} className="mb-1">
                {item}
              </li>)}
          </ul>
        </div>
        <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
          View Guide <span className="ml-1">→</span>
        </button>
      </div>
    </div>;
};
const Guides = () => {
  const guides = [{
    id: 1,
    title: 'Easy Weekend DIY: Building a Pallet Coffee Table',
    takeaways: ['Step-by-step instructions with tool recommendations', 'Material sourcing tips for quality pallets', 'Finishing techniques for different aesthetic styles', 'Maintenance advice for long-lasting results'],
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Pallet coffee table'
  }, {
    id: 2,
    title: 'Your Step-by-Step Guide to Indoor Plant Propagation',
    takeaways: ['Different propagation methods for various plant types', 'Common mistakes to avoid during the process', 'Best practices for successful root development', 'Timeline expectations from cutting to mature plant'],
    image: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Indoor plant propagation'
  }, {
    id: 3,
    title: 'Seasonal Deep Cleaning: The Ultimate Room-by-Room Checklist',
    takeaways: ['Comprehensive cleaning tasks organized by space', 'Product recommendations for different surfaces', 'Time-saving techniques for efficient cleaning', 'Maintenance schedules to keep your home pristine'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Home cleaning'
  }];
  return <div className="bg-white w-full pt-16 md:pt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          How-to & DIY Guides
        </h1>
        <p className="text-gray-700 mb-8">
          My practical guides provide clear, actionable advice for home
          projects, organization, and lifestyle improvements. Each guide breaks
          down complex processes into manageable steps, empowering readers to
          tackle projects with confidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map(guide => <GuideCard key={guide.id} title={guide.title} takeaways={guide.takeaways} image={guide.image} alt={guide.alt} />)}
        </div>
      </div>
    </div>;
};
export default Guides;