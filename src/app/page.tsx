"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import { Phone, Mail, LinkedinIcon, Youtube } from 'lucide-react';
import dynamic from 'next/dynamic';

const ResumeDownloadButton = dynamic(
  () => import('@/components/ResumeDownloadButton'),
  { ssr: false }
);

import { ResumeDocument } from '@/components/ResumeDocument';

const Portfolio: React.FC = () => {
  const experiences: {
    role: string;
    company: string;
    location: string;
    period: string;
    projects: {
      name: string;
      details: string[];
      youtubeUrl?: string;
    }[];
  }[] = [
    {
      role: "Lead Information Developer",
      company: "Zeta Suite",
      location: "Bengaluru, India",
      period: "Sep 2021 – Present",
      projects: [
        {
          name: "Internal Projects",
          details: [
            "Utilized AI-driven tools and custom-built AI agents to author and optimize 150+ technical documents, reducing review cycles by 70%.",
            "Working with docs-as-code, reStructuredText, and Sphinx.",
            "Designed and maintained information architecture for documentation sites.",
            "Created core developer documents for Clusters created in Kubernetes.",
            "Working on Hugo site deployment through CI-CD and Jenkins.",
            "Working on multiple projects at the same time.",
            "Leading junior writers and video editors on different projects.",
            "Collaborated with developers, DevOps, and PMs to align documentation with sprint deliverables."
          ]
        }
      ]
    },
    {
      role: "Senior Technical Writer",
      company: "FIS",
      location: "Mohali, India",
      period: "June 2017 – Sep 2021",
      projects: [
        {
          name: "Internal Projects",
          details: [
            "Worked on a variety of Manuals related to B2K.",
            "Updated and published the manuals as per the scheduled release.",
            "Created and managed snow tickets on Snow Portal.",
            "Partially worked in the testing team using mainframe, service view and putty.",
            "Created and managed manuals related to the project.",
            "Updated and published manuals as per the scheduled release.",
            "Using Adobe FrameMaker and Excel for the project docs."
          ]
        }
      ]
    },
    {
      role: "Technical Writer II",
      company: "Cogniter Technologies",
      location: "Chandigarh, India",
      period: "Oct 2015 – June 2017",
      projects: [
        {
          name: "Talygen",
          details: [
            "Wrote manuals, guides and website content.",
            "Wrote and managed Technical Documents related to the software after coordinating with the development team and testers.",
            "Wrote Front-end content and pop-up messages.",
            "Wrote Company Proposals and SRS.",
            "Created test cases, test scenarios, logging bugs, etc.",
            "Worked on CMS."
          ]
        }
      ]
    },
     {
       role: "Jr. Technical Writer",
       company: "Browsewire",
       location: "Mohali, India",
       period: "Sep 2014 – Oct 2015",
       projects: [
         {
           name: "Internal Projects",
           details: [
             "Wrote manuals, guides and website content.",
             "Wrote Blogs and Articles.",
             "Created promotional posts for different Social Media Sites; LinkedIn, Facebook, etc.",
             "Wrote content for Website and Wikipedia page."
           ]
         }
       ]
     }
  ];

  // THIS BLOCK AUTOMATICALLY SORT THE EXPERIENCES
  const sortedExperiences = [...experiences].sort((a, b) => {
    const getEndDate = (period: string): Date => {
      const endDateStr = period.split('–')[1].trim();
      if (endDateStr === 'Present') {
        // Use current date for "Present" to ensure it's always first
        return new Date();
      }
      return new Date(endDateStr);
    };

    const dateA = getEndDate(a.period);
    const dateB = getEndDate(b.period);

    // Sort in descending order (newest first)
    return dateB.getTime() - dateA.getTime();
  });

  const skillCategories = [
    {
      category: "Technical Skills",
      skills: ["Doc-as-code", "Sphinx", "Prompt Engineering", "Generative AI Content Creation", "AI-Assisted Documentation", "Conversational AI Design", "Information Retrieval using AI", "CI/CD",  "Information Architecture", "Content Strategy", "SDK/API Documentation", "Docs Automation", "Video Scripting", "Kubernetes", "Markdown", "HTML", "XML"  ]
    },
    {
      category: "Tools",
      skills: [ "Hugo", "Adobe FrameMaker", "Adobe Acrobat Pro DC", "Postman", "Swagger", "OpenAI GPT", "Claude", "Google Gemini", "ChatGPT Enterprise" ]
    },
    {
      category: "DevOps",
      skills: [ "GitHub Copilot", "Bitbucket", "Jenkins", "CI/CD" ]
    },
    {
      category: "Project Management & Documentation",
      skills: ["JIRA", "Confluence", "Microsoft Copilot" ]
    },
    {
      category: "IDE",
      skills: [ "VS Code" ]
    },
  ];

  const education = [
      {
        degree: "Masters in English Literature",
        institution: "Punjab University",
        period: "2011 – 2013",
        location: "Chandigarh, India",
      }
  ];

  const portfolioData = {
    sortedExperiences,
    skillCategories,
    education
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-10 bg-gradient-to-r from-slate-700 via-slate-800 to-gray-900 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          MERCY MOCHARY
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-6">
          AI-Driven Lead Information Developer
        </h2>
        <p className="mb-6">
          Email: mercymochary4@gmail.com | Mobile: +91-9050118760
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild className="bg-slate-100 text-slate-900 hover:bg-slate-300">
            <a href="dial:+9050118760" className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              Call Me
            </a>
          </Button>

          <Button asChild className="bg-slate-100 text-slate-900 hover:bg-slate-300">
            <a href="mailto:mercymochary4@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Email Me
            </a>
          </Button>

          <Button asChild className="bg-slate-100 text-slate-900 hover:bg-slate-300">
            <a
              href="https://www.linkedin.com/in/mercymochary/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <LinkedinIcon className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
        <div className="flex justify-center mt-8">
          <ResumeDownloadButton data={portfolioData} />
        </div>
      </section>

      {/* Summary */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h3 className="text-3xl font-bold mb-6 text-center">Professional Summary</h3>
        <p className="text-lg leading-relaxed">
          Technical writer with 11+ years in fintech and cloud, specializing in AI-powered documentation. Proven expertise in Information Architecture, Content Strategy, SDK/API Documentation, and docs-as-code. Skilled in CI/CD integration, docs automation, content governance, localization, and knowledge base management to deliver scalable, high-quality content.
          </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-3xl font-bold mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-indigo-700 mb-4">{category.category}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (sIdx + 1) * 0.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Experience</h3>
          <div className="md:columns-2 md:gap-8 space-y-8">
            {/* Mapped over the new `sortedExperiences` array */}
            {sortedExperiences.map((job, idx) => (
              <motion.div
                key={idx}
                // this class is to prevent cards from splitting across columns
                className="break-inside-avoid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-lg">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h4 className="text-lg font-bold">{job.role}</h4>
                      <div className="text-sm text-gray-500">
                        <p>{job.company}, {job.location}</p>
                        <p>{job.period}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {job.projects.map((project, pIdx) => (
                        <div key={pIdx} className="border-t pt-4">
                          <div className="flex items-center justify-between">
                            <h5 className="font-semibold text-indigo-700 mb-2">{project.name}</h5>
                            {project.youtubeUrl && (
                              <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" title="Watch PI Demo on YouTube" className="text-gray-500 hover:text-red-600 transition-colors">
                                <Youtube className="h-6 w-6" />
                              </a>
                            )}
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {project.details.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-12 text-center">Education</h3>
        <div className="flex justify-center">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="w-full md:w-2/3 lg:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold">{edu.degree}</h4>
                  <div className="text-sm text-gray-500 mt-1">
                    <p>{edu.institution}, {edu.location}</p>
                    <p>{edu.period}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
