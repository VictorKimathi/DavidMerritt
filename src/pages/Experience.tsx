import React from 'react';
import { Link } from 'react-router-dom';
const Experience = () => {
  return <div className="bg-white w-full pt-16 md:pt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Experience</h1>
        <div className="mb-4">
          <p className="text-gray-700 mb-6">
            With over 5 years in the home and lifestyle writing space, I've
            developed expertise in creating engaging, informative content across
            various platforms and formats.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-2">
            <a href="#freelance" className="text-blue-600 hover:text-blue-800 block mb-2">
              Freelance Feature Writer (2021-Present)
            </a>
            <a href="#contributor" className="text-blue-600 hover:text-blue-800 block mb-2">
              Content Contributor at BrightLiving (2019-2021)
            </a>
            <a href="#editorial" className="text-blue-600 hover:text-blue-800 block">
              Editorial Assistant at Habitat Weekly (2018-2019)
            </a>
          </div>
        </div>
        <div id="freelance" className="mb-12 pt-4">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h2 className="text-2xl font-bold">
              Freelance Feature Writer – Interior & Lifestyle
            </h2>
            <p className="text-gray-600">February 2021 – Present</p>
          </div>
          <p className="text-gray-700 mb-4">
            As an independent writer specializing in home and lifestyle content,
            I create in-depth features and guides for various digital
            publications and content platforms.
          </p>
          <h3 className="font-bold mb-2">Key Responsibilities:</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">
              Research and write long-form articles (2,500-3,000 words) on home
              design, organization, DIY projects, and sustainable living
            </li>
            <li className="mb-2">
              Deliver high-quality first drafts that require minimal editing
            </li>
            <li className="mb-2">
              Develop SEO-conscious headlines and content structure while
              maintaining reader engagement
            </li>
            <li className="mb-2">
              Revise and polish drafts based on editorial feedback
            </li>
            <li>
              Cover trending topics while providing unique angles and practical
              insights
            </li>
          </ul>
          <h3 className="font-bold mb-2">Notable Achievements:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">
              Consistently produced top-performing articles with above-average
              reader engagement metrics
            </li>
            <li className="mb-2">
              Developed a 5-part series on sustainable home renovations that was
              featured on the client's homepage
            </li>
            <li>
              Established ongoing relationships with multiple publications,
              resulting in regular monthly assignments
            </li>
          </ul>
        </div>
        <div id="contributor" className="mb-12 pt-4">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h2 className="text-2xl font-bold">
              Content Contributor – Home & DIY Vertical
            </h2>
            <p className="text-gray-600">June 2019 – January 2021</p>
          </div>
          <p className="text-gray-600 mb-4">BrightLiving Blog Network</p>
          <p className="text-gray-700 mb-4">
            Contributed regular content to a popular lifestyle blog network,
            focusing on practical home improvement and DIY projects for their
            growing audience.
          </p>
          <h3 className="font-bold mb-2">Key Responsibilities:</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">
              Authored biweekly how-to guides and informational articles
              (1,200-1,800 words)
            </li>
            <li className="mb-2">
              Collaborated with the editorial team on story angles and content
              calendars
            </li>
            <li className="mb-2">
              Integrated AP Style guidelines while maintaining a conversational
              tone
            </li>
            <li className="mb-2">
              Sourced and suggested appropriate imagery to accompany articles
            </li>
            <li>
              Built audience rapport through responsive comment engagement
            </li>
          </ul>
          <h3 className="font-bold mb-2">Notable Achievements:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">
              Created the blog's most-shared article of 2020: "10 Weekend
              Projects That Actually Get Finished"
            </li>
            <li className="mb-2">
              Increased average time-on-page by 22% through improved content
              structure and engagement techniques
            </li>
            <li>
              Initiated and developed a popular monthly feature highlighting
              reader project submissions
            </li>
          </ul>
        </div>
        <div id="editorial" className="mb-12 pt-4">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h2 className="text-2xl font-bold">Editorial Assistant</h2>
            <p className="text-gray-600">March 2018 – May 2019</p>
          </div>
          <p className="text-gray-600 mb-4">Habitat Weekly</p>
          <p className="text-gray-700 mb-4">
            Supported the editorial team at a digital home and garden
            publication, gaining valuable experience in content development and
            publication processes.
          </p>
          <h3 className="font-bold mb-2">Key Responsibilities:</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">
              Assisted in curating and editing weekly content for the digital
              magazine
            </li>
            <li className="mb-2">
              Organized interviews and communication with industry experts and
              contributors
            </li>
            <li className="mb-2">
              Fact-checked articles and verified source information
            </li>
            <li className="mb-2">
              Formatted content for CMS upload and publication
            </li>
            <li>
              Contributed occasional short-form articles (500-800 words) on
              assigned topics
            </li>
          </ul>
          <h3 className="font-bold mb-2">Notable Achievements:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">
              Developed and implemented an improved system for tracking article
              submissions and publication schedule
            </li>
            <li className="mb-2">
              Received byline credit on 12 published articles
            </li>
            <li>
              Coordinated a successful series of expert interviews that
              increased site traffic by 15%
            </li>
          </ul>
        </div>
        <div className="text-center">
          <Link to="/portfolio" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors mr-4">
            View My Portfolio
          </Link>
          <Link to="/resume" className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-6 rounded-md transition-colors">
            Download Resume
          </Link>
        </div>
      </div>
    </div>;
};
export default Experience;