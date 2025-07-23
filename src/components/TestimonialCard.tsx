import React from 'react';
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}
const TestimonialCard = ({
  quote,
  name,
  title,
  company
}: TestimonialCardProps) => {
  return <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-gray-500 text-sm">
          {title}, {company}
        </p>
      </div>
    </div>;
};
export default TestimonialCard;