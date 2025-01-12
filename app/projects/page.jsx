"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/assets/work/grocerystore.png",
    category: "full stack",
    name: "Grocery Website",
    description: "A website for ecommerce grocery store",
    link: "https://grocery-frontend-nnxj.onrender.com",
    github: "https://github.com/divyesh350/Grocery",
  },
  {
    image: "/assets/work/ems.png",
    category: "react js",
    name: "Employee Management System",
    description: "A website to manage employees in a company",
    link: "https://ems-nwnd.onrender.com",
    github: "https://github.com/divyesh350/employeemangement",
  },
  {
    image: "/assets/work/goodfolio_11zon.png",
    category: "HTML,CSS ",
    name: "Goodfolio Website",
    description: "A website for a company that sells electronics",
    link: "/",
    github: "/",
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
