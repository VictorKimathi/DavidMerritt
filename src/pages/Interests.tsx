import React from 'react';
const InterestCard = ({
  title,
  description,
  image,
  alt
}) => {
  return <div className="flex flex-col md:flex-row gap-6 mb-12">
      <div className="md:w-1/3">
        <img src={image} alt={alt} className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>;
};
const Interests = () => {
  const interests = [{
    id: 1,
    title: 'Vintage Farmhouse Aesthetics',
    description: "I'm drawn to the warmth and character of vintage farmhouse design. There's something special about spaces that blend rustic elements with modern comforts. I enjoy exploring how weathered woods, antique fixtures, and neutral palettes can create inviting environments that tell a story. This interest directly influences my writing on home design trends and DIY restoration projects.",
    image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Vintage farmhouse interior'
  }, {
    id: 2,
    title: 'Repurposed Design',
    description: "Finding new life for old items is both a creative challenge and an environmentally conscious choice. I'm passionate about transforming discarded materials into functional, beautiful pieces for the home. Whether it's converting an old ladder into a bookshelf or turning mason jars into lighting fixtures, I believe repurposing demonstrates how constraints can drive creativity—a philosophy that extends to my writing approach as well.",
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    alt: 'Repurposed furniture'
  }, {
    id: 3,
    title: 'Indoor Plant Care',
    description: "My collection of houseplants continues to grow as I explore the world of indoor gardening. Beyond the aesthetic appeal, I'm fascinated by how plants improve living spaces—both in air quality and mental wellbeing. I enjoy researching different species' care requirements and propagation techniques, which has informed many of my articles on bringing natural elements into home design.",
    image: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Indoor plants'
  }, {
    id: 4,
    title: 'Backyard Herb Gardens',
    description: "There's something deeply satisfying about stepping outside to snip fresh herbs for cooking. My modest herb garden has become a laboratory for experimenting with different growing methods, companion planting, and seasonal varieties. This hands-on experience has been invaluable when writing gardening guides, particularly for readers with limited space who still want to enjoy the benefits of homegrown produce.",
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Herb garden'
  }, {
    id: 5,
    title: 'Exploring Antique Markets',
    description: 'Weekends often find me wandering through antique markets and estate sales, hunting for unique pieces with history and character. These excursions are not just about finding treasures for my home but also about understanding design evolution and craftsmanship techniques from different eras. This knowledge enriches my writing on vintage decor trends and helps me guide readers on what to look for when investing in antique pieces.',
    image: 'https://media.istockphoto.com/id/614038800/photo/flea-market.jpg?s=612x612&w=0&k=20&c=4qNiALU0tDwq8XEErDxP-2uv2j07lzVmpYkGkhHFwgc=',
    alt: 'Antique market'
  }];
  return <div className="bg-white w-full pt-16 md:pt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Personal Interests
        </h1>
        <p className="text-gray-700 mb-8">
          My personal interests deeply inform my writing approach and subject
          expertise. These passions provide hands-on experience that translates
          into authentic, knowledgeable content for readers.
        </p>
        {interests.map(interest => <InterestCard key={interest.id} title={interest.title} description={interest.description} image={interest.image} alt={interest.alt} />)}
      </div>
    </div>;
};
export default Interests;