"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
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
    description: "A website for investment",
    link: "https://divyesh350.github.io/goodfolio/",
    github: "https://github.com/divyesh350/goodfolio?tab=readme-ov-file",
  },
  {
    image: "/assets/work/animewebsite.png",
    category: "HTML,CSS ",
    name: "Anime Website",
    description: "A website to download anime",
    link: "https://divyesh350.github.io/Anime_Website/",
    github: "https://github.com/divyesh350/Anime_Website",
  },
  {
    image: "/assets/work/netflix.png",
    category: "HTML,CSS ",
    name: "Netflix Clone Website",
    description: "A website for online streaming",
    link: "https://divyesh350.github.io/netflix-clone-project/",
    github: "https://github.com/divyesh350/netflix-clone-project",
  },
 
  {
    image: "/assets/work/xypo.png",
    category: "HTML,CSS ",
    name: "xypo learning Website",
    description: "A website for online education or course ",
    link: "https://divyesh350.github.io/learning-website-xypo/",
    github: "https://github.com/divyesh350/learning-website-xypo",
  },
];


const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col items-center xl:items-start justify-center">
          <h2 className="section-title mb-4 ">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider  */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper 
          autoplay={{delay:3000}}
          className="h-[480px]" slidesPerView={1} 
          breakpoints={{
            640:{
              slidesPerView:2,
            }
          }} 
          spaceBetween={30} 
          modules={[Pagination]} 
          pagination={{ clickable: true }}>
            {/* show only the first 4 projects for slides  */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
