import React from 'react';
import ProjectCard from '../components/ProjectCard';
const Portfolio = () => {
  const projects = [{
    id: 1,
    title: 'Designing Your Dream Cozy Nook',
    description: 'Explored practical tips for creating a comfortable reading corner using repurposed furniture and budget-friendly decor items.',
    image: 'https://images.unsplash.com/photo-1585128903994-9788298932a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    alt: 'Cozy reading nook'
  }, {
    id: 2,
    title: 'Budget-Friendly Farmhouse Decor Updates',
    description: 'Discover simple ways to bring farmhouse charm to your home without breaking the bank, focusing on DIY solutions and smart shopping.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Farmhouse decor'
  }, {
    id: 3,
    title: 'DIY Vertical Herb Garden for Small Spaces',
    description: 'Step-by-step guide to creating a space-efficient herb garden for urban apartments, complete with maintenance tips and herb selection advice.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Vertical herb garden'
  }, {
    id: 4,
    title: 'The Ultimate Guide to Kitchen Organization',
    description: 'Comprehensive strategies for maximizing kitchen space and efficiency, from pantry systems to drawer dividers and smart storage solutions.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80',
    alt: 'Organized kitchen'
  }, {
    id: 5,
    title: "Sustainable Home Choices: A Beginner's Guide",
    description: 'An introduction to eco-friendly home products and practices, with practical first steps for homeowners looking to reduce their environmental impact.',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    alt: 'Sustainable home items'
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