"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  // {
  //   image: "/assets/work/mernecommerce.png",
  //   category: "full stack",
  //   name: "Ecommerce Website",
  //   description: "A website for ecommerce store with admin panel",
  //   link: "https://mern-ecommercestore-jsow.onrender.com",
  //   github: "https://github.com/divyesh350/Mern-EcommerceStore",
  // },
  {
    image: "/assets/work/chatapp.png",
    category: "full stack",
    name: "Real Time Chat App",
    description: "A website for real time chat app",
    link: "https://chat-app-frzi.onrender.com",
    github: "https://github.com/divyesh350/chat-app",
  },
  {
    image: "/assets/work/lush-lilac.png",
    category: "full stack",
    name: "Ecommerce App for POD business",
    description: "A website for selling POD products in ecommerce",
    link: "https://lush-lilac-web.vercel.app/",
    github: "https://github.com/divyesh350/lush-lilac-web",
  },
 
  {
    image: "/assets/work/animewebsite.png",
    category: "HTML,CSS ",
    name: "Anime Website",
    description: "A website to download anime",
    link: "https://meek-genie-620cb0.netlify.app",
    github: "https://github.com/divyesh350/Anime_Website",
  },
  {
    image: "/assets/work/xypo.png",
    category: "HTML,CSS ",
    name: "xypo learning Website",
    description: "A website for online education or course ",
    link: "https://playful-lamington-835f5a.netlify.app/",
    github: "https://github.com/divyesh350/learning-website-xypo",
  },
];

// Remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) =>
    category === "all projects" ? project : project.category === category
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs value={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {uniqueCategories.map((cat, index) => (
              <TabsTrigger
                key={index}
                value={cat}
                onClick={() => setCategory(cat)}
                className="capitalize w-[162px] md:w-auto"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
