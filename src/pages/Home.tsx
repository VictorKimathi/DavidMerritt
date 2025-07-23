import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import ProjectCard from '../components/ProjectCard';
const Home = () => {
  return <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-100 flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Cozy home interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hey, I'm David Merritt
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Resourceful and reliable home and lifestyle writer
          </p>
          <Link to="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors">
            Learn More About Me
          </Link>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Crafting long-form features that balance trend awareness with
              practical advice
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              I specialize in creating engaging home and lifestyle content that
              connects with readers, optimizing for visibility while maintaining
              a warm, down-to-earth tone.
            </p>
          </div>
        </div>
      </section>
      {/* Featured Work Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard title="Designing Your Dream Cozy Nook" description="Explored practical tips for creating a comfortable reading corner using repurposed furniture." image="https://images.unsplash.com/photo-1585128903994-9788298932a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="Cozy reading nook" />
            <ProjectCard title="Budget-Friendly Farmhouse Decor Updates" description="Discover simple ways to bring farmhouse charm to your home without breaking the bank." image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Farmhouse decor" />
            <ProjectCard title="DIY Vertical Herb Garden for Small Spaces" description="Step-by-step guide to creating a space-efficient herb garden for urban apartments." image="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Vertical herb garden" />
          </div>
          <div className="text-center mt-10">
            <Link to="/portfolio" className="inline-block text-blue-600 hover:text-blue-800 font-medium">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard quote="David consistently delivers well-researched, engaging content that truly resonates with our audience. His ability to blend practical advice with current trends is invaluable." name="Jennifer Adams" title="Editor" company="Home & Garden Monthly" />
            <TestimonialCard quote="Working with David is a breeze. He's reliable, meets deadlines, and his writing always has that warm, inviting tone we look for." name="Michael Rodriguez" title="Content Manager" company="LivingWell Digital" />
          </div>
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>;
};
export default Home;