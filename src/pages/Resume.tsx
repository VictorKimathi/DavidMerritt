import React from 'react';
import { Link } from 'react-router-dom';
import { DownloadIcon } from 'lucide-react';
const Resume = () => {
  return <div className="bg-white w-full pt-16 md:pt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
          <a href="David_Merritt Resume_Home & Lifestyle.docx" download className="hidden md:block">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
            <DownloadIcon size={18} className="mr-2" />
            Download PDF
          </button>
          </a>
       
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">DAVID MERRITT</h1>
            <p className="text-gray-600">Home & Lifestyle Writer</p>
            <div className="mt-4">
              <p>davidmerritt962@gmail.com | (615) 872-6142</p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">
              PROFILE
            </h2>
            <p className="text-gray-700">
              Resourceful and reliable home and lifestyle writer with 5+ years
              of experience crafting engaging content. Specialized in long-form
              features (2,500+ words) that balance trend awareness with
              practical advice. Skilled at optimizing content for visibility
              while maintaining a warm, down-to-earth tone that connects with
              readers.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">
              EXPERIENCE
            </h2>
            <div className="mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="font-bold">
                  Freelance Feature Writer – Interior & Lifestyle
                </h3>
                <p className="text-gray-600">February 2021 – Present</p>
              </div>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  Research and write long-form articles (2,500-3,000 words) on
                  home design, organization, DIY projects, and sustainable
                  living
                </li>
                <li>
                  Deliver high-quality first drafts that require minimal editing
                </li>
                <li>
                  Develop SEO-conscious headlines and content structure while
                  maintaining reader engagement
                </li>
                <li>Revise and polish drafts based on editorial feedback</li>
                <li>
                  Cover trending topics while providing unique angles and
                  practical insights
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="font-bold">
                  Content Contributor – Home & DIY Vertical
                </h3>
                <p className="text-gray-600">June 2019 – January 2021</p>
              </div>
              <p className="text-gray-600 mb-2">BrightLiving Blog Network</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  Authored biweekly how-to guides and informational articles
                  (1,200-1,800 words)
                </li>
                <li>
                  Collaborated with the editorial team on story angles and
                  content calendars
                </li>
                <li>
                  Integrated AP Style guidelines while maintaining a
                  conversational tone
                </li>
                <li>
                  Sourced and suggested appropriate imagery to accompany
                  articles
                </li>
                <li>
                  Built audience rapport through responsive comment engagement
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="font-bold">Editorial Assistant</h3>
                <p className="text-gray-600">March 2018 – May 2019</p>
              </div>
              <p className="text-gray-600 mb-2">Habitat Weekly</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  Assisted in curating and editing weekly content for the
                  digital magazine
                </li>
                <li>
                  Organized interviews and communication with industry experts
                  and contributors
                </li>
                <li>Fact-checked articles and verified source information</li>
                <li>Formatted content for CMS upload and publication</li>
                <li>
                  Contributed occasional short-form articles (500-800 words) on
                  assigned topics
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">
              SKILLS
            </h2>
            <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>Long-form feature writing (2,500+ words)</li>
              <li>Home, lifestyle, and garden content specialization</li>
              <li>SEO best practices and headline writing</li>
              <li>CMS tools (WordPress, Ghost, Wix)</li>
              <li>AP Style proficiency</li>
              <li>Editorial collaboration and revision</li>
              <li>Trend research and audience targeting</li>
              <li>Photo sourcing and captioning basics</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">
              EDUCATION
            </h2>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="font-bold">
                Bachelor of Arts in English, Creative Writing Focus
              </h3>
              <p className="text-gray-600">2014 – 2018</p>
            </div>
            <p className="text-gray-600">University of Tennessee, Knoxville</p>
          </div>
          <div>
            <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">
              INTERESTS
            </h2>
            <p className="text-gray-700">
              Vintage farmhouse aesthetics, repurposed design, indoor plant
              care, backyard herb gardens, exploring antique markets, watching
              HGTV shows (Fixer Upper, Home Town), testing DIY tutorials
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>;
};
export default Resume;