import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return <div className="bg-white w-full pt-16 md:pt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Start Here</h1>
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="David Merritt" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">About David</h2>
            <p className="text-gray-700 mb-4">
              I'm a dedicated home and lifestyle writer with a passion for
              creating engaging, informative content that resonates with
              readers. With years of experience in the field, I've developed a
              knack for balancing trend awareness with practical advice that
              readers can actually use in their daily lives.
            </p>
            <p className="text-gray-700 mb-4">
              My approach to writing is rooted in resourcefulness and
              reliability. I believe that the best content not only informs but
              also inspires readers to take action, whether it's tackling a DIY
              project, reorganizing their living space, or exploring new design
              concepts.
            </p>
            <p className="text-gray-700">
              I specialize in long-form features (2,500+ words) that dive deep
              into topics, providing comprehensive coverage while maintaining a
              warm, down-to-earth tone that makes complex subjects accessible to
              everyone.
            </p>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">My Approach</h2>
          <p className="text-gray-700 mb-4">
            I believe that <strong>constraints drive creativity</strong>.
            Whether working under tight deadlines, specific editorial
            guidelines, or particular word counts, I've found that these
            boundaries often lead to the most innovative and effective content.
          </p>
          <p className="text-gray-700 mb-4">
            My writing process involves thorough research, thoughtful
            organization, and meticulous attention to detail. I'm committed to
            delivering content that not only meets but exceeds expectations,
            with a focus on:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">
              Engaging, conversational writing that connects with readers
            </li>
            <li className="mb-2">
              SEO-conscious content that maintains readability and flow
            </li>
            <li className="mb-2">
              Practical advice grounded in research and real-world applicability
            </li>
            <li className="mb-2">
              Clear, concise explanations of complex concepts
            </li>
            <li>
              Visually descriptive language that helps readers envision
              possibilities
            </li>
          </ul>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Long-form Feature Writing</h3>
              <p className="text-gray-700">
                Creating comprehensive, engaging articles (2,500+ words)
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">
                Home & Lifestyle Specialization
              </h3>
              <p className="text-gray-700">
                Expert knowledge in interior design, DIY, and organization
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">SEO Best Practices</h3>
              <p className="text-gray-700">
                Crafting search-optimized content and compelling headlines
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Editorial Collaboration</h3>
              <p className="text-gray-700">
                Working effectively with editors and content teams
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">CMS Proficiency</h3>
              <p className="text-gray-700">
                Experience with WordPress, Ghost, and Wix platforms
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Trend Research</h3>
              <p className="text-gray-700">
                Identifying emerging trends and audience interests
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/experience" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors mr-4">
            View My Experience
          </Link>
          <Link to="/portfolio" className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-6 rounded-md transition-colors">
            Explore My Work
          </Link>
        </div>
      </div>
    </div>;
};
export default About;