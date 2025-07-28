import React from 'react';
import ProjectCard from '../components/ProjectCard';
const Portfolio = () => {
  const projects = [{
    id: 1,
    title: 'Establishing a Home Reset Routine to Keep Your Space Fresh',
    description: 'A clean and functional home is easier to maintain with consistent weekly habits. Without a routine, clutter builds up, tasks pile on, and the space becomes harder to manage. A home reset routine helps break this cycle by setting aside regular time to tidy, clean, and restore order before things get out of hand.',
    image: 'https://images.unsplash.com/photo-1585128903994-9788298932a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    alt: 'Cozy reading nook',
    href: 'Establishing_a_Home.pdf'
  }, {
    id: 2,
    title: 'Clever Storage Ideas for Small Kitchens That Maximize Every Inch',
    description: 'Small kitchens often present a challenge when it comes to storage, but limited space doesn’t have to mean limited functionality. With the right strategies, even the most compact kitchen can be organized, efficient, and pleasant to use. The key lies in making smart use of every available area, from overlooked corners to vertical surfaces. By rethinking how and where items are stored, you can reduce clutter and create a layout that supports daily tasks without feeling cramped.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Farmhouse decor',
    href: 'Clever_Storage_Ideas.pdf'
  }, {
    id: 3,
    title: 'Designing a Cozy Reading Nook with Small Space Comfort in Mind',
    description: 'Creating a cozy reading nook doesn’t require a large home or a spare room. With a bit of creativity and thoughtful planning, even the smallest spaces can be transformed into a warm, inviting corner perfect for reading and unwinding. Whether it’s a quiet spot by a window, an unused closet, or a simple corner in your living room, a few design choices can help carve out a peaceful retreat that fits your lifestyle and space limitations.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Vertical herb garden',
    href: 'Designing_a_Cozy.pdf'
  }];
  return <div className="bg-white w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Portfolio</h1>
        <p className="text-gray-700 mb-8">
          Below is a selection of my home and lifestyle writing projects. Each
          piece demonstrates my approach to creating engaging, informative
          content that balances trend awareness with practical advice.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map(project => <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} alt={project.alt} />)}
        </div>
      </div>
    </div>;
};
export default Portfolio;
