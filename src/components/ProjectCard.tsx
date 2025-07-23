import React from 'react';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}
const ProjectCard = ({
  title,
  description,
  image,
  alt
}: ProjectCardProps) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
          Read Article <span className="ml-1">→</span>
        </button>
      </div>
    </div>;
};
export default ProjectCard;